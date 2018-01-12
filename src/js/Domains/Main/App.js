
export default class {

    constructor(config, myModule){
        this.config = config;
        this.myModule = myModule;
    }
    run() 
    {
        this.myModule.print();
        $('#app').append('<p>App version is: ' + this.config.app.ver + '</p>');
    }
}