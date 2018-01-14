import Bottle from "./container";
window.Bottle = Bottle;
window.SelamiApp = Bottle.container.AppService;
window.SelamiApp.run();