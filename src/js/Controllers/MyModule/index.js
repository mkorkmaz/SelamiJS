import MainTemplate from "Templates/main.njk";

export default class MyModule {

  constructor (config) {
    this.config = config;
  }

  print (parameters) {
    $("#app").html("");
    $("#app").append("<p style='text-decoration: underline;'>" + this.config.name + "</p>");
    $("#app").append("<p>Module version is: " + this.config.ver + "</p>");
    $("#app").append(MainTemplate.render({"name": "John Doe", }));
  }
  
}
