import AppService from "App";
import ModuleService from "App/MyModule";
import ContentService from "App/Content";

function AppFactory(container) {
    const config = container.config;
    return new AppService(config, container);
}

function ModuleFactory(container) {
    const config = container.config;
    return new ModuleService(config.module);
}

function ContentFactory(container) {
    const config = container.config;
    return new ContentService();
}

export {AppFactory, ContentFactory, ModuleFactory};