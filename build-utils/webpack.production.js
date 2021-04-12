const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  output: {
    filename: "bundle.[contenthash].js",
  },
  plugins: [new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
}
