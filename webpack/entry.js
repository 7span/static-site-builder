const staticSiteBuilderConfig = require("./static-site-builder.config.js");
const jsList = staticSiteBuilderConfig.js;
const cssList = staticSiteBuilderConfig.css;
const helpers = require("./helpers");

let entry = {};

jsList.forEach(js => {
  let outputName = "js/" + helpers.removeExtension(js.name);
  entry[outputName] = "./src/js/" + js.name;
});

cssList.forEach(css => {
  let outputName = "css/" + helpers.removeExtension(css.name);
  entry[outputName] = "./src/css/" + css.name;
});

module.exports = entry;
