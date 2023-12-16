# webpack-config-scope

## During css loading , this was configured to make sure even css style are transformed into appropriate bundle
```js
module.exports = {
  mode: "production",
  entry: [path.resolve(__dirname, "src/index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
```
