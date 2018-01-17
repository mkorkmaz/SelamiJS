import config from "./config";
import Bottle from "bottlejs";
import {SelamiAppFactory, ContentFactory, ModuleFactory, } from "SelamiJS/Factories/Services";
import $ from "jquery";
import css from '../assets/css';

const bottle = new Bottle();

bottle.value("config", config);
bottle.factory("SelamiAppService", SelamiAppFactory);
bottle.factory("ContentService", ContentFactory);
bottle.factory("MyModuleService", ModuleFactory);

export default bottle;
