export default class {

    constructor(container, config) {
        this.container = container;
        this.config = config;        
    }

    dispatcher(routeData) {
        this.requestedPath = routeData.path;
        this.controllerInfo = this.config.defaultRoute.split("/");
        if (this.requestedPath !== '/') {
           this.controllerInfo = this.getControllerInfo();
        }
    }

    dispatch() {
        let controller = this.pascalCase(this.controllerInfo[0]) + "Service";
        let method = this.camelCase(this.controllerInfo[1]);
        if (typeof this.container[controller] === "undefined") {
            let ContentServiceForController =  this.container.ContentService;
            return ContentServiceForController.notFound();
        }
        let Controller = this.container[controller];
        if (typeof Controller[method] === "undefined") {
            let ContentServiceForMethod =  this.container.ContentService;
            return ContentServiceForMethod.notFound();
        }
        return Controller[method]();
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
        return items.join(""); 
    }

    camelCase(str) {
        let items = str.split("-");
        for (let index = 0; index < items.length; index++) {
            let item = items[index];
            items[index] = (index===0 ? item[0].toLowerCase(): item[0].toUpperCase()) + item.slice(1).toLowerCase();
        }
        return items.join(""); 
    }
}