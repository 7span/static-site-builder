const path = require("path");
const staticSiteBuilderConfig = require("./static-site-builder.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Contains the plugin configuration pagewise
let pluginsForPages = [];

//Default Options
let options = staticSiteBuilderConfig.htmlOptions;

//Page & Its Config
let pages = staticSiteBuilderConfig.pages;

pages.forEach((page, index) => {
  options.filename = page.name + ".html";
  options.template = path.join("src/pages", page.name + ".pug");
  pluginsForPages.push(new HtmlWebpackPlugin(options));
});

module.exports = pluginsForPages;
