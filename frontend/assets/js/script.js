var app = $.spapp({
  defaultView: "#hero",
  templateDir: "./views/"
});

app.route({
  view: "login",
  onReady: UserService.init
});

app.route({
  view: "register",
  onReady: UserService.initRegister
});

app.route({
  view: "hero",       
  onReady: UserService.generateMenuItems
});

app.route({
  view: "services",
  onReady: OurServiceService.init.bind(OurServiceService)
});

app.route({
  view: "pricing",
  onReady: PricingService.init
});

app.route({
  view: "my-account",
  onReady: MyAccountService.init
});

app.route({
  view: "about",     
  onReady: ContactService.init
});

app.run();
UserService.generateMenuItems();