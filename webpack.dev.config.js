const path = require("path");
const fs = require("fs-extra");

const babelConfig = fs.readJsonSync(path.resolve(__dirname, "./.babelrc"));

module.exports = {
  target: "web",
  mode: "development",
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
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000
  }
};
