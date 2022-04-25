const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const helpers = require("./helpers")

module.exports = {
  context: helpers.resolveFromRootPath("src"),
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      assets: helpers.resolveFromRootPath("src/assets"),
    }
  },
  devtool: "eval-source-map",
  entry: {
    app: ["./index.tsx"],
  },
  stats: "errors-only",
  output: {
    filename: "[name].[chunkhash].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /node_modules/,
        loader: "url-loader?limit=5000",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: "index.html", //Name of file in ./dist/
      template: "index.html", //Name of template in ./src
    }),
    new Dotenv({
      path: "./dev.env",
    }),
  ],
};
