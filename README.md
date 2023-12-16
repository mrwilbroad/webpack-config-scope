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


  4. But on loading and refreshing every time new HashFile as output is generated , to avoid multiple filed to be generated 
       - in <code>output</code> Block add <code> clean: true</code>
        ```js
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "bundle-[fullhash].js",
            clean : true
            },
        ```


5. Addition of <code>Source map </code> , This is for debuging your code when action problem is in the source code 
     - Easy to understand the source of error within your code
     - Add this line as another block of statement in root of <code>module.export</code>
      [Recommended choice for production builds with high quality SourceMaps.](https://webpack.js.org/configuration/devtool/#root)
     ```js
       devtool: "source-map",
      ```

