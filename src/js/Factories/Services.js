import AppService from "App";
import ModuleService from "App/MyModule";

function AppFactory (container) {
    const config = container.config;
    const module = container.ModuleService;
    return new AppService(config, module);
}


function ModuleFactory (container) {
    const config = container.config;
    return new ModuleService(config.module);
}


function ModuleFactory (container) {
    const config = container.config;
    return new ModuleService(config.module);
}

export {AppFactory, ModuleFactory};