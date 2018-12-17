const webpack = require("webpack");
const path = require("path");
const fs = require("fs-extra");

const babelConfig = fs.readJsonSync(path.resolve(__dirname, "./.babelrc"));

module.exports = {
  target: "web",
  mode: "production",
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        loader: "babel-loader",
        exclude: /node_modules/,
        test: /\.jsx?$/,
        query: babelConfig
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000
  }
};
