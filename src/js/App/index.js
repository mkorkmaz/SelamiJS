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
        const Router = new SelamiRouter(App.container, App.config.router);
        Router.dispatcher(ctx);
        Router.dispatch();
    }
}