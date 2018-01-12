import config from './config';
import Bottle from 'bottlejs';
import App from './Domains/Main/App';
import Module from './Domains/Main/Module';
import $ from 'jquery'

const bottle = new Bottle();
bottle.value('config', config);

bottle.factory('Module', function(container) {
    let config = container.config;
    return new Module(config.module);
});

bottle.factory('App', function(container) {
    let config = container.config;
    let module = container.Module;
    return new App(config, module);
});


export default bottle;
