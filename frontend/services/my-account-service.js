const MyAccountService = {
  async init() {
    const payload = getJwtPayload();
    if (!payload) return location.replace("#login");

    const userId = payload.user.id;

    const [profile, reservations, allPlans] = await Promise.all([
      MyAccountService.fetchProfile(userId),
      MyAccountService.fetchReservations(userId),
      MyAccountService.fetchPlans()
    ]);

    MyAccountService.renderProfile(profile);
    MyAccountService.renderSubscriptions(reservations, allPlans);
  },

  /** GET /customers/{id} */
  fetchProfile(id) {
    return new Promise((resolve, reject) => {
      RestClient.get(
        `users/${id}`,          
        res => resolve(res),
        err => {
          toastr.error("Could not load profile");
          reject(err);
        }
      );
    });
  },

  /** GET /reservations/member/{id} */
  fetchReservations(id) {
    return new Promise((resolve, reject) => {
      RestClient.get(
        `reservations/member/${id}`,
        list => resolve(list),
        err => {
          toastr.error("Could not load reservations");
          reject(err);
        }
      );
    });
  },

  /** GET /plans – used only to map plan_id → plan_title / price */
  fetchPlans() {
    return new Promise((resolve, reject) => {
      RestClient.get(
        "plans",
        plans => resolve(plans),
        err => {
          toastr.error("Could not load plans");
          reject(err);
        }
      );
    });
  },

  /** Fill the “Profile Information” list */
  renderProfile(user) {
    const $ul = $("#my-account .account-info ul").empty();

    $ul.append(`<li><strong>Name:</strong> ${user.customer_name}</li>`)
       .append(`<li><strong>Email:</strong> ${user.customer_email}</li>`)
  },

  /** Build the subscriptions table */
  renderSubscriptions(reservations, plans) {
    const planMap = Object.fromEntries(
      plans.map(p => [p.id, p])           
    );

    const $tbody = $("#my-account .account-subscriptions tbody").empty();

    if (!reservations.length) {
      return $tbody.append(
        `<tr><td colspan="4" class="text-center">No reservations yet</td></tr>`
      );
    }

    reservations.forEach(r => {
      const p         = planMap[r.plan_id] || {};
      const price     = p.plan_price ? `$${p.plan_price}` : "—";
      const planTitle = p.plan_title   || `Plan #${r.plan_id}`;
      const status    = new Date(r.end_date) >= new Date() ? "Active" : "Expired";
      const renewal   = status === "Active" ? r.end_date : "N/A";

      $tbody.append(`
        <tr data-res-id="${r.id}">
          <td>${planTitle}</td>
          <td>${price} / month</td>
          <td>${status}</td>
          <td>${renewal}</td>
        </tr>
      `);
    });
  }
};

