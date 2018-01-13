import css from "../../../assets/main.css";
import MainTemplate from "Templates/main.njk";

export default class {

    constructor(config) {
        this.config = config;
    }

    print() {
        $("#app").append("<p>" + this.config.name + "</p>");
        $("#app").append("<p>Module version is: " + this.config.ver + "</p>");
        $("#app").append(MainTemplate.render({"name": "Joe Doe"}));
    }
}