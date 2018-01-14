import page from "page";
import SelamiRouter from "../router";

export default class {

    constructor(config, container) {
        this.config = config;
        this.container = container;
        this.appState = {
            loaded : 0
        };
    }

    setRoutes() {
        page("*", this.dispatcher);
        page({hashbang: true});
    }

    run() {
        this.setRoutes();
    }

    dispatcher (ctx, next) {
        const RunningApp = SelamiApp;
        const Router = new SelamiRouter(RunningApp.container, RunningApp.config.router);
        Router.dispatcher(ctx);
        const controllerInfo = Router.dispatch();
        RunningApp.checkIfControllerExists(controllerInfo.controller);
        const Controller = RunningApp.container[controllerInfo.controller];
        RunningApp.checkIfControllerHasMethod(Controller, controllerInfo.method);
        Controller[controllerInfo.method](controllerInfo.args);
    }

    checkIfControllerExists(controller) {
        const validServices = Object.keys(this.container);
        if (validServices.indexOf(controller) === -1) {
            throw "Controller `" + controller + "` couldn't be found!";
        }
    }

    checkIfControllerHasMethod(controller, method) {
        const validMethods = Object.getOwnPropertyNames(Object.getPrototypeOf(controller));
        if (validMethods.indexOf(method) === -1) {
            throw "Method `" + controller + "." + method + "` couldn't be found!";
        }
    }
}