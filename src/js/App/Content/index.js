import HomeTemplate from "Templates/content/home.njk";

export default class {

    constructor(config) {
        this.config = config;
    }

    home() {
        $("#app").html(HomeTemplate.render({"name": "John Doe"}));
    }

    notFound() {
        $("#console").html((new Date()).toDateString() + ": 404 - Not Found");
    }
}