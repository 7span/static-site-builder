const merge = require("webpack-merge");
const common = require("./webpack.common.js");
var webpack = require("webpack");

module.exports = (env, argv) =>
  merge(common(env, argv), {
    output: {
      publicPath: ""
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production")
      })
    ]
  });
