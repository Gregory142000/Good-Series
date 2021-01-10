const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/App.js",
  output: {
    path: __dirname + "/build",
    filename: "main.js"
  },
  devtool: "inline-source-map",
  devServer: {
    open: true,
    index: "index.html",
    contentBase: __dirname + "/src",
    compress: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styleSheet.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader"}
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin()
    ]
  }
}