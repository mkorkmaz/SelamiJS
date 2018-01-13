import config from "./config";
import Bottle from "bottlejs";
import {AppFactory, ModuleFactory} from "Factories/Services";
import $ from "jquery";

const bottle = new Bottle();
bottle.value("config", config);
bottle.factory("Module", ModuleFactory);
bottle.factory("App", AppFactory);

export default bottle;