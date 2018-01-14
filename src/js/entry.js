import Bottle from "./container";
window.Bottle = Bottle;
window.App = Bottle.container.AppService;
window.App.run();