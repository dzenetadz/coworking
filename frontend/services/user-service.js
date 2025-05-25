var UserService = {
  init: function() {
    const token = localStorage.getItem("user_token");
    if (token) {
      // already logged in? go to home
      window.location.replace("index.html");
    }
    $("#login-form").validate({
      submitHandler: function(form) {
        const entity = Object.fromEntries(new FormData(form).entries());
        UserService.login(entity);
      }
    });
  },

  login: function(entity) {
    $.ajax({
      url: Constants.PROJECT_BASE_URL + "auth/login",
      type: "POST",
      data: JSON.stringify(entity),
      contentType: "application/json",
      dataType: "json",
      success: function(result) {
        localStorage.setItem("user_token", result.data.token);
        window.location.replace("index.html");
      },
      error: function(xhr) {
        toastr.error(xhr.responseText || "Error");
      }
    });
  },

  logout: function() {
    localStorage.clear();
    window.location.replace("login.html");
  },

  generateMenuItems: function() {
    const token = localStorage.getItem("user_token");
    const user  = Utils.parseJwt(token).user;
    if (!user) {
      window.location.replace("login.html");
      return;
    }

    let nav = "";
    if (user.is_admin === 1) {
      // admin menu
      nav += `<li><button onclick="UserService.logout()">Logout</button></li>`;
    } else {
      // regular user menu
      nav += `<li><button onclick="UserService.logout()">Logout</button></li>`;
    }
    $("#tabs").html(nav);
  }
};