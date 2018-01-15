import SelamiAppService from "App";
import ModuleService from "App/MyModule";
import ContentService from "App/Content";

function SelamiAppFactory (container) {
  const config = container.config;
  return new SelamiAppService(config, container);
}

function ModuleFactory (container) {
  const config = container.config;
  return new ModuleService(config.module);
}

function ContentFactory (container) {
  const config = container.config;
  return new ContentService();
}

export {SelamiAppFactory, ContentFactory, ModuleFactory};
