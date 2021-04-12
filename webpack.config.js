const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  entry: "./src",
  mode: "development",
  output: {
    filename: "bundle.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({ title: "Intro to Webpack" }),
    new CleanWebpackPlugin(),
  ],
}
