import merge  from "deepmerge";

import globalConfig from "./autoload/global";
import localConfig from "./autoload/local";
import moduleConfig from "./autoload/module.local"; 

const config = merge.all([globalConfig, localConfig, moduleConfig]);

export default config;