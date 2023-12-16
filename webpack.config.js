const path = require("node:path");
const htmlwebpackplugin = require("html-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: [
    path.resolve(__dirname, "src/index.js")
    ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[fullhash].js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
      new HtmlWebpackPlugin({
        title : "WEBPACK Dev",
        filename: "index.html",
        template:  "public/index.html"
      })
  ],
};
