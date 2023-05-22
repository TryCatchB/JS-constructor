import { Sidebar } from "./sidebar";
import { Site } from "./site";

export class App {
  constructor(model) {
    this.model = model;
  }

  init() {
    const site = new Site("#site");

    site.render(this.model);

    const updateCallBack = (newBlock) => {
      model.push(newBlock);
      site.render(this.model);
    };

    new Sidebar("#panel", updateCallBack);
  }
}
