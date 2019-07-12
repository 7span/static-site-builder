const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = [
  {
    test: /\.scss$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === "development",
          reloadAll: false
        }
      },
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          implementation: require("sass")
        }
      }
    ]
  },
  {
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === "development",
          reloadAll: false
        }
      },
      "css-loader"
    ]
  }
];
