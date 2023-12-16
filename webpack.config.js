const path = require("node:path")

module.exports = {
    mode: "production",
    entry: [
        "./src/index.js"
    ],
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "index.js"
    }
}