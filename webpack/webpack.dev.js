const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const devServer = require("./static-site-builder.config.js").devServer;

module.exports = (env, argv) =>
  merge(common(env, argv), {
    output: {
      publicPath: `http://${devServer.host}:${devServer.port}/`
    },
    devServer: {
      hot: true,
      headers: { "Access-Control-Allow-Origin": "*" },
      port: devServer.port,
      open: true,
      contentBase: "./src",
      watchContentBase: true
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ]
  });
