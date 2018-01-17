import SelamiAppService from "SelamiJS/app";
import ModuleService from "SelamiJS/Controllers/MyModule";
import ContentService from "SelamiJS/Controllers/Content";

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
