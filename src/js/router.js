export default class SelamiRouter {
  constructor (config) {
    this.config = config;
  }

  dispatcher (routeData) {
    this.requestedPath = routeData.path;
    this.controllerInfo = this.config.defaultRoute.split("/");
    if (this.requestedPath !== "/") {
      this.controllerInfo = this.getControllerInfo();
    }
  }

  dispatch () {
    const controller = this.pascalCase(this.controllerInfo.shift()) + "Service";
    const method = this.camelCase(this.controllerInfo.shift());
    return {controller, method, "args": this.controllerInfo};
  }

  getControllerInfo () {
    let items = this.trimRequestedPath(this.requestedPath).split("/");
    if (typeof items[1] === "undefined" || items[1] === "") {
      items[1] = "default";
    }
    return items;
  }

  trimRequestedPath (str) {
    return str.replace(/^\/+/g, "");
  }

  pascalCase (str) {
    const items = str.split("-");
    for (let index = 0; index < items.length; index++) {
      let item = items[index];
      items[index] = item[0].toUpperCase() + item.slice(1).toLowerCase();
    }
    return items.join("").replace(/\W+/g, "");
  }

  camelCase (str) {
    const items = str.split("-");
    for (let index = 0; index < items.length; index++) {
      let item = items[index];
      items[index] = (index === 0 ? item[0].toLowerCase() : item[0].toUpperCase()) + item.slice(1).toLowerCase();
    }
    return items.join("").replace(/\W+/g, "");
  }
}
