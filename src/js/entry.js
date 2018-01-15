import Bottle from "./container";
window.Bottle = Bottle;
window.App = Bottle.container.SelamiAppService;
window.App.run();
