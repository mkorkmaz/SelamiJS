const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const DefinePlugin = require("webpack/lib/DefinePlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CleanObsoleteChunks = require("webpack-clean-obsolete-chunks");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  entry: "./src/js/entry.js",
  output: {
    filename: "assets/js/bundle.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      SelamiJS: path.resolve(__dirname, "src/js/"),
      Templates: path.resolve(__dirname, "src/templates/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(njk|nunjucks)$/,
        loader: "nunjucks-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(["./dist/*",]),
    new DefinePlugin({
      "process.env": {
        "NODE_ENV": "production"
      }
     }),
    new LiveReloadPlugin({
      "appendScriptTag": true
    }),
    new ExtractTextPlugin("assets/css/styles.[hash].css"),
    new HtmlWebpackPlugin({
      hash: true,
      template: "src/assets/index.html"
    }),  
    new CleanObsoleteChunks({deep: true, verbose: true}),
    new UglifyJsPlugin({extractComments:true}),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    contentBase: "./dist"
  }
};