const UserService = {
  /* ---------- LOGIN ---------- */
  init() {
    if (Utils.getJwtPayload()) {
      return location.replace("#hero");
    }

    $("#login-form").validate({
      submitHandler: form => {
        const dto = Object.fromEntries(new FormData(form).entries());
        UserService.login(dto);
      }
    });
  },

  login(dto) {
    RestClient.post(
      "auth/login",
      dto,
      res => {
        localStorage.setItem("user_token", res.data.token);
        location.replace("#hero");
      },
      jqXHR => toastr.error(jqXHR.responseText || "Login failed")
    );
  },

  /* ---------- REGISTER ---------- */
  initRegister() {
    if (Utils.getJwtPayload()) {
      return location.replace("#hero");
    }

    $("#register-form").validate({
      submitHandler: form => {
        const dto = Object.fromEntries(new FormData(form).entries());
        UserService.register(dto);
      }
    });
  },

  register(dto) {
    RestClient.post(
      "auth/register",
      dto,
      res => {
        localStorage.setItem("user_token", res.data.token);
        // regenerate nav in case you're already on a page with it
        UserService.generateMenuItems();
        location.replace("#hero");
      },
      jqXHR => toastr.error(jqXHR.responseText || "Registration failed")
    );
  },

  /* ---------- LOGOUT ---------- */
  logout() {
    localStorage.clear();
    location.replace("#login");
    // if you want to force a full reload:
    // location.reload();
  },

  /* ---------- NAV BAR ---------- */
  generateMenuItems() {
    const payload = Utils.getJwtPayload();
    let navHtml = "";

    if (payload && payload.user) {
      const u = payload.user;
      navHtml = `
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#my-account" class="me-3">${u.customer_name}</a></li>
        <li><a href="#" onclick="UserService.logout()">Logout</a></li>
      </ul>
      `;
    } else {
      navHtml = `
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
      `;
    }

    $("#navmenu").html(navHtml);
  }
};
