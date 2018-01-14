import page from 'page';

export default class {

    constructor(config, myModule) {
        this.config = config;
        this.myModule = myModule;
        this.setRoutes();
    }

    setRoutes() {
        page('/action-list-user', this.listUsers);
        page();
    }

    run() {
        this.myModule.print();
        $("#app").append("<p>App version is: " + this.config.app.ver + "</p>");
    }

    listUsers() {
        console.log('list_users');
    }
}