const merge = require("deepmerge");
const userConfig = require("../static-site-builder.config.js");

const defaultConfig = {
  devServer: {
    host: "localhost",
    port: 8080
  },
  staticData: {},
  pugHelpers: {},
  htmlOptions: {
    minify: false
  },
  pages: [
    {
      name: "index"
    }
  ],
  js: [],
  css: []
};

const mergedConfig = merge(defaultConfig, userConfig, {
  arrayMerge: (destinationArray, sourceArray, options) => sourceArray
});
module.exports = mergedConfig;
