import page from "page";

export default class {

    constructor(config, myModule) {
        this.config = config;
        this.myModule = myModule;
        this.appState = {
            loaded : 0
        };
    }

    setRoutes() {
        page("/", this.welcome);
        page("/action-list-user", this.listUsers);
        page("*", this.welcome);
        page({hashbang: true});
    }

    run() {
        this.setRoutes();
    }

    listUsers() {
        console.log(App.appState.loaded);
        console.log("list_users");
    }

    welcome() {
        App.appState.loaded = 1;
        console.log("welcome");
        App.myModule.print();
        $("#app").append("<p>App version is: " + App.config.app.ver + "</p>");
    }
}