import config from "./config";

import Bottle from "bottlejs";
import {SelamiAppFactory, ContentFactory, ModuleFactory, } from "Factories/Services";
import $ from "jquery";

const bottle = new Bottle();

bottle.value("config", config);
bottle.factory("SelamiAppService", SelamiAppFactory);
bottle.factory("ContentService", ContentFactory);
bottle.factory("MyModuleService", ModuleFactory);

export default bottle;
