// const _ = require("lodash");
import { join } from "lodash-es";
// import _ from "lodash";

const component = () => {
  const element = document.createElement("div");

  //   element.innerHTML = _.join(["hello", "webpack"], ", ");
  element.innerHTML = join(["hello", "webpack!"], ", ");

  console.log("source map");

  return element;
};

document.body.appendChild(component());
