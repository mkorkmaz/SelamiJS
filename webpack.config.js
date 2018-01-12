const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");

module.exports = {
  entry: "./src/js/entry.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist")
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            minimize: true
          }
        }
      ]
    }]
  },
  plugins: [
    new LiveReloadPlugin({
      "appendScriptTag": true
    })
  ]
};