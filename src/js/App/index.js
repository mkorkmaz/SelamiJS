export default class {

    constructor(config, myModule) {
        this.config = config;
        this.myModule = myModule;
    }

    run() {
        this.myModule.print();
        $("#app").append("<p>App version is: " + this.config.app.ver + "</p>");

        $('body').on('click', '#action-list-user', function(){
            App.listUsers();
        });
    }

    listUsers() {
        console.log('list_users');
    }
}