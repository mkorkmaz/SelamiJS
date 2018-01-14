export default class {

    constructor(container, config) {
        this.container = container;
        this.config = config;        
    }

    dispatcher(routeData) {
        this.requestedPath = routeData.path;
        this.controllerInfo = this.config.defaultRoute.split("/");
        if (this.requestedPath !== "/") {
           this.controllerInfo = this.getControllerInfo();
        }
    }

    dispatch() {
        let controller = this.pascalCase(this.controllerInfo[0]) + "Service";
        let method = this.camelCase(this.controllerInfo[1]);
        this.checkIfControllerExists(controller);
        let Controller = this.container[controller];
        this.checkIfControllerHasMethod(Controller, method);
        return Controller[method]();
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

    getControllerInfo() {
        let items = this.trimRequestedPath(this.requestedPath).split("/");
        if (typeof items[1] === "undefined" || items[1] === "") {
            items[1] = "default";
        }
        return items;
    }

    trimRequestedPath(str){
        return str.replace(/^\/+/g, "");
    }

    pascalCase(str) {
        let items = str.split("-");
        for (let index = 0; index < items.length; index++) {
            let item = items[index];
            items[index] = item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
        return items.join("").replace(/\W+/g, ""); 
    }

    camelCase(str) {
        let items = str.split("-");
        for (let index = 0; index < items.length; index++) {
            let item = items[index];
            items[index] = (index===0 ? item[0].toLowerCase(): item[0].toUpperCase()) + item.slice(1).toLowerCase();
        }
        return items.join("").replace(/\W+/g, ""); 
    }
}