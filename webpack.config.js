const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpackMerge = require("webpack-merge")

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)

module.exports = ({ mode = "production" }) =>
  webpackMerge(
    {
      entry: "./src",
      mode,
      plugins: [
        new HtmlWebpackPlugin({ title: "Intro to Webpack" }),
        new CleanWebpackPlugin(),
      ],
      module: {
        rules: [
          {
            test: /\.(png|jpe?g)$/i,
            use: [
              {
                loader: "file-loader",
              },
            ],
          },
        ],
      },
    },
    modeConfig(mode)
  )
