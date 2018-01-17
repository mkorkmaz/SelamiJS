import HomeTemplate from "Templates/content/home.njk";

export default class Content {

  constructor (config) {
    this.config = config;
  }

  home () {
    $("body").append(HomeTemplate.render({"name": "John Doe"}));
  }
  
}
