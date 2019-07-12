var path = require("path");
var webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pugLoader = require("./pug-loader");
const cssLoader = require("./css-loader");
const htmlWebpackPlugin = require("./html-webpack-plugin");
const entry = require("./entry");

module.exports = (env, argv) => {
  return {
    entry: entry,
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "[name].js"
    },
    module: {
      rules: [
        ...pugLoader,
        ...cssLoader,
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader"
        },
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: "file-loader",
          options: {
            outputPath: "fonts/",
            name: "[name].[ext]"
          }
        },
        {
          test: /\.(png|jpg|svg)$/,
          loader: "file-loader",
          options: {
            outputPath: "img/", //This will replace same image
            name: "[name].[ext]"
          }
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        moduleFilename: ({ name }) => `${name.replace("/js/", "/css/")}.css`
      }),
      new webpack.NamedModulesPlugin(),
      ...htmlWebpackPlugin
    ],
    resolve: {
      alias: {
        "@img": path.resolve(__dirname, "./src/img/")
      }
    }
  };
};
