# webpack-config-scope

1. ## During css loading , this was configured to make sure even css style are transformed into appropriate bundle
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
    }
    };
    ```



2. ## After addition of HtmlWebpackPlugin for html template and other const value defintion
   ```js
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
        filename: "[name]-[contenthash].js",
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
    ```

3. ## Addition Server configuration 
```js
devServer : {
      static : {
        directory : path.resolve(__dirname,"dist")
      },
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback : true
  },
  ```

