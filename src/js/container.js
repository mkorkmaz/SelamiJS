import config from "./config";

import Bottle from "bottlejs";
import {AppFactory, ContentFactory, ModuleFactory} from "Factories/Services";
import $ from "jquery";

const bottle = new Bottle();

bottle.value("config", config);
bottle.factory("AppService", AppFactory);
bottle.factory("ContentService", ContentFactory);
bottle.factory("MyModuleService", ModuleFactory);
export default bottle;
