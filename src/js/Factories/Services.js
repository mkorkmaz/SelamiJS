import AppService from "App";
import ModuleService from "App/MyModule";

function AppFactory (container) {
    let config = container.config;
    let module = container.ModuleService;
    return new AppService(config, module);
}

function ModuleFactory (container) {
    const config = container.config;
    return new ModuleService(config.module);
}

export {AppFactory, ModuleFactory};