const OurServiceService = {
    init() {
        OurServiceService.fetchAll();
    },

    /** Fetch all services and render them */
    fetchAll() {
        RestClient.get(
            "services",
            servicesArray => {
                OurServiceService.renderList(servicesArray);
                if (OurServiceService.isAdmin()) OurServiceService.enableEditing();
            },
            err => console.error("Failed to fetch services", err)
        );
    },

    /** Render the grid of service cards */
    renderList(services) {
        const container = $("#services .row.gy-4");
        container.empty();

        services.forEach(svc => {
            const card = $(`
        <div class="col-lg-4 col-md-6" data-id="${svc.id}">
          <div class="service-item position-relative">
            <div class="icon"><i class="bi bi-gear-fill"></i></div>
            <h3>${svc.service_title}</h3>
            <p>${svc.service_desc}</p>
            <!-- edit/delete buttons; hidden by default -->
            <button class="btn btn-sm btn-warning edit-btn"
                    style="display:none; position:absolute; top:10px; right:20px;">
              Edit
            </button>
          </div>
        </div>
      `);

            container.append(card);
        });
    },

    /** If admin, show “Edit”+“Delete” on each card & add an Add button */
    enableEditing() {
        // show edit on each
        $("#services .edit-btn")
            .show()
            .off("click")
            .on("click", e => {
                const id = $(e.currentTarget).closest("[data-id]").data("id");
                OurServiceService.showEditForm(id);
            });

        // show delete on each
        $("#services .delete-btn")
            .show()
            .off("click")
            .on("click", e => {
                const id = $(e.currentTarget).closest("[data-id]").data("id");
                if (confirm("Are you sure you want to delete this service?")) {
                    OurServiceService.deleteService(id);
                }
            });

        // add “Add Service” button once
        if (!$("#add-service-btn").length) {
            // find the container that *actually holds* the .row.gy-4
            const gridContainer = $("#services .row.gy-4").closest(".container");

            // prepend the button there only
            gridContainer.prepend(`<button id="add-service-btn" class="btn btn-success mb-4">Add New Service</button>`);
            // delegate the click
            gridContainer.on("click", "#add-service-btn", () => OurServiceService.showAddForm());
        }
    },

    /** Load one service and populate modal */
    showEditForm(id) {
        RestClient.get(
            `services/${id}`,
            svc => {
                $("#serviceModalLabel").text("Edit Service");
                $("#serviceForm [name=id]").val(svc.id);
                $("#serviceForm [name=service_title]").val(svc.service_title);
                $("#serviceForm [name=service_desc]").val(svc.service_desc);
                $("#delete-service-btn")
                    .show()
                    .off("click")
                    .on("click", () => {
                        if (confirm("Really delete this service?")) {
                            OurServiceService.deleteService(id);
                        }
                    });
                $("#serviceModal").modal("show");
            },
            err => toastr.error("Could not load service")
        );
    },

    /** Show empty modal to add a new service */
    showAddForm() {
        $("#serviceModalLabel").text("Add Service");
        $("#serviceForm")[0].reset();
        $("#serviceForm [name=id]").val("");
        $("#serviceModal").modal("show");
    },

    /** Called by the form’s submitHandler */
    saveService(dto) {
        const isUpdate = Boolean(dto.id);
        if (!isUpdate) {
            delete dto.id;
        }
        const url = isUpdate ? `services/${dto.id}` : "services";
        const method = isUpdate ? "PUT" : "POST";

        RestClient.request(
            url,
            method,
            dto,
            () => {
                $("#serviceModal").modal("hide");
                OurServiceService.fetchAll();
            },
            err => {
                console.error("save failed", err);
                toastr.error(err.responseJSON?.message || "Save failed");
            }
        );
    },

    /** Send DELETE /services/:id */
    deleteService(id) {
        RestClient.delete(
            `services/${id}`,
            {}, // no body
            () => {
                $("#serviceModal").modal("hide");
                OurServiceService.fetchAll();
            },
            err => {
                console.error("delete failed", err);
                toastr.error(err.responseJSON?.message || "Delete failed");
            }
        );
    },

    /** JWT-util to know if user.is_admin === 1 */
    isAdmin() {
        const payload = getJwtPayload();
        return payload?.user?.is_admin === 1;
    }
};

// wire up the Bootstrap-modal form validation & submit
$(function () {
    $("#serviceForm").validate({
        submitHandler: form => {
            const dto = Object.fromEntries(new FormData(form).entries());
            OurServiceService.saveService(dto);
        }
    });
});
