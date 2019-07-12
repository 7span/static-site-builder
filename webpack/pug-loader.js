const userConfig = require("./static-site-builder.config");

module.exports = [
  {
    test: /\.pug$/,
    use: [
      {
        loader: "html-loader"
      },
      {
        loader: "pug-html-loader",
        options: {
          pretty: true,
          data: {
            static: userConfig.staticData,
            pages: userConfig.pages,
            helpers: userConfig.pugHelpers
          }
        }
      }
    ]
  }
];
