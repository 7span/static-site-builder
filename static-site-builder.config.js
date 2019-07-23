const staticData = require("./src/static-data/index.js");
const pugHelpers = require("./src/pug-helpers.js");

module.exports = {
  htmlOptions: {},
  devServer: {},
  staticData: staticData,
  pugHelpers: pugHelpers,
  pages: [
    {
      name: "index"
    }
  ],
  js: [
    {
      name: "app.js"
    }
  ],
  css: [
    {
      name: "style.scss"
    }
  ]
};
