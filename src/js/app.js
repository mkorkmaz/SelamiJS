import page from "page";
import SelamiRouter from "SelamiJS/router";

export default class SelamiApp {

  constructor (config, container) {
    this.config = config;
    this.container = container;
  }

  setRoutes () {
    if (window.location.hash !== "" && window.location.hash !== "#!" && this.config.router.goHomeOnRefresh === true) {
      window.location.href = "/";
    } else {
      page("*", this.dispatcher.bind(this));
      page({hashbang: this.config.router.hashbang});
    }
  }

  run () {
    this.setRoutes();
  }

  dispatcher (ctx, next) {
    const routerConfig = this.config.router;
    const Router = new SelamiRouter(routerConfig);
    Router.dispatcher(ctx);
    const controllerInfo = Router.dispatch();
    this.checkIfControllerExists(controllerInfo.controller);
    const Controller = this.container[controllerInfo.controller];
    this.checkIfControllerHasMethod(Controller, controllerInfo.method);
    Controller[controllerInfo.method](controllerInfo.args);
  }

  checkIfControllerExists (controller) {
    const validServices = Object.keys(this.container);
    if (validServices.indexOf(controller) === -1) {
      throw new Error(`Controller "${controller}" couldn't be found!`);
    }
  }

  checkIfControllerHasMethod (controller, method) {
    const validMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(controller));
    if (validMethods.indexOf(method) === -1) {
      throw new Error(`Method "${controller.constructor.name}.${method}" couldn't be found!`);
    }
  }
  
}
