import merge from "deepmerge";

import globalConfig from "./Config/global";
import localConfig from "./Config/local";
import moduleConfig from "./Config/module.local"; 

const config = merge.all([globalConfig, localConfig, moduleConfig]);

export default config;