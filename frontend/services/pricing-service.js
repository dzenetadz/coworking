const PricingService = {
  init() {
    PricingService.bindBookingButtons();
    PricingService.bindBookForm();
    PricingService.fetchAllPlans();
  },

  /** Fetch all plans from backend and render */
  fetchAllPlans() {
    RestClient.get(
      "plans",
      plans => {
        PricingService.renderList(plans);
        if (PricingService.isAdmin()) PricingService.enableEditing();
      },
      err => console.error("Failed to load plans", err)
    );
  },

  /** Render the grid of pricing cards */
  renderList(plans) {
    const container = $("#pricing .row.gy-3");
    container.empty();

    plans.forEach(plan => {
      // infer unit (daily vs. monthly)
      const unit = plan.plan_title.toLowerCase().includes("daily") ? "day" : "month";

      const card = $(`
        <div class="col-xl-3 col-lg-6" data-plan-id="${plan.id}">
          <div class="pricing-item position-relative">
            <h3>${plan.plan_title}</h3>
            <h4><sup>$</sup>${plan.plan_price}<span> / ${unit}</span></h4>
            <p>${plan.plan_description}</p>
            <div class="btn-wrap">
              <a href="#" class="btn-buy btn btn-primary">Book Now</a>
            </div>
            <button class="btn btn-sm btn-warning edit-btn"
                    style="display:none;position:absolute;top:10px;right:20px;">
              Edit
            </button>
          </div>
        </div>
      `);

      container.append(card);
    });
  },

  /** Show Book-Now modal */
  bindBookingButtons() {
    $("#pricing").on("click", ".btn-buy", e => {
      e.preventDefault();
      const planId = $(e.currentTarget).closest("[data-plan-id]").data("plan-id");
      PricingService.showBookPlanForm(planId);
    });
  },

  showBookPlanForm(planId, planType) {
    $("#bookForm")[0].reset();
    $("#bookForm [name=plan_id]").val(planId);
    $("#bookForm").data("planType", planType);
    $("#bookModal").modal("show");
  },

  bindBookForm() {
    $("#bookForm").validate({
      submitHandler: form => {
        const dto = Object.fromEntries(new FormData(form).entries());
        this.submitReservation(dto);
      }
    });
  },


  submitReservation(dto) {
    const planType = $("#bookForm").data("planType");
    const user = getJwtPayload()?.user;
   if (!user) {
    // close the modal if it's open
    toastr.info("You must log in first");
    $("#bookModal").modal("hide");
    // then redirect
    return location.replace("#login");
  }

    const start = new Date(dto.start_date);
    const end   = new Date(dto.end_date);
    if (end <= start) {
      return toastr.error("End date must be after start date");
    }
    if (planType === "monthly") {
      const minEnd = new Date(start);
      minEnd.setMonth(minEnd.getMonth() + 1);
      if (end < minEnd) {
        return toastr.error("For monthly plans, reservation must be at least one month");
      }
    }

    const today = new Date().toISOString().slice(0, 10);
    const bookingData = {
      customer_id: user.id,
      plan_id:     Number(dto.plan_id),
      order_date:  today,
      start_date:  dto.start_date,
      end_date:    dto.end_date
    };

    RestClient.post(
      "reservations",
      bookingData,
      () => {
        $("#bookModal").modal("hide");
        toastr.success("Your reservation is confirmed! Come by anytime to pay.");
      },
      err => toastr.error(err.responseJSON?.message || "Could not create reservation")
    );
  },

  /** ADMIN: show Edit/Delete and Add New Plan */
  enableEditing() {
    // Edit
    $("#pricing .edit-btn")
      .show()
      .off("click")
      .on("click", e => {
        const id = $(e.currentTarget).closest("[data-plan-id]").data("plan-id");
        PricingService.showEditForm(id);
      });

    // Add New Plan button
    if (!$("#add-plan-btn").length) {
      $("#pricing .container")
        .prepend(`<button id="add-plan-btn" class="btn btn-success mb-4">Add New Plan</button>`)
        .on("click", "#add-plan-btn", () => PricingService.showAddForm());
    }
  },

  /** Populate modal for editing */
showEditForm(id) {
  RestClient.get(`plans/${id}`,
    plan => {
      $("#planForm [name=id]").val(plan.id);
      $("#planForm [name=plan_title]").val(plan.plan_title);
      $("#planForm [name=plan_price]").val(plan.plan_price);
      $("#planForm [name=plan_description]").val(plan.plan_description);

      // show the modal
      $("#planModal").modal("show");

      $("#delete-plan-btn")
        .show()
        .off("click")             // remove old handlers
        .on("click", () => {
          if (!confirm("Delete this plan?")) return;
          this.deletePlan(id);  
        });
    },
    () => toastr.error("Could not load plan")
  );
},

  /** Empty modal for adding */
  showAddForm() {
    $("#planModalLabel").text("Add Plan");
    $("#planForm")[0].reset();
    $("#planModal").modal("show");
  },

  /** Create or update via POST/PUT */
  savePlan(dto) {
    const isUpdate = Boolean(dto.id);
    if (!isUpdate) delete dto.id;

    const url = isUpdate ? `plans/${dto.id}` : "plans";
    const method = isUpdate ? "PUT" : "POST";

    RestClient.request(
      url,
      method,
      dto,
      () => {
        $("#planModal").modal("hide");
        PricingService.fetchAllPlans();
      },
      jqXHR => toastr.error(jqXHR.responseJSON?.message || "Save failed")
    );
  },

  /** Delete by id */
deletePlan(id) {
  console.log("this is id of deleting plan", id)
  RestClient.delete(
    `plans/${id}`,
    null,        
    plans => {    
      this.renderList(plans);
      if (this.isAdmin()) this.enableEditing();
    },
    jqXHR => toastr.error(jqXHR.responseJSON?.message || "Delete failed")
  );
},


  /** Simple admin check */
  isAdmin() {
    const payload = getJwtPayload();
    return payload?.user?.is_admin === 1;
  }
};

/** Wire up the Bootstrap-modal form */
$(function () {
  $("#planForm").validate({
    submitHandler: form => {
      const dto = Object.fromEntries(new FormData(form).entries());
      console.log("savign new plan", dto)
      PricingService.savePlan(dto);
    }
  });
});
