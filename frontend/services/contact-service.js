const ContactService = {
  init() {
    ContactService.bindForm();
  },

  bindForm() {
  const $form = $("#about .php-email-form").first();
  if (!$form.length) return;         
  
  // hide status boxes initially
  $form.find(".loading,.sent-message,.error-message").hide();

  $form.validate({
    rules: {
      email: { email: true }       
    },

    submitHandler: formEl => {
      // collect all the fields the user filled out
      const dto = Object.fromEntries(new FormData(formEl).entries());

      const user = getJwtPayload()?.user;
      if (user) {
        dto.customer_id = user.id;
      }

      ContactService.sendMessage($form, dto);
    }
  });
},

  sendMessage($form, dto) {
  // show spinner
  $form.find(".loading").show();

  RestClient.post(
    "messages",
    dto,
    () => {
      $form.find(".loading").hide();

      // reset the form first
      $form[0].reset();

      // show the “sent-message,” delay, and fade out
      $form
        .find(".sent-message")
        .show()
        .delay(3000)
        .fadeOut(600);
    },
    err => {
      $form.find(".loading").hide();
      $form
        .find(".error-message")
        .text(err.responseJSON?.message || "Could not send")
        .show();
    }
  );
}

};
