const path = require("path");

// TODO:  resolve block below is a temporary solution; should use .vue files (components) instead
const config = {
  entry: {
    app: path.resolve(__dirname, "../src/client-entry.js")
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /(\.js$)|(\.vue$)/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    filename: "assets/js/[name].js"
  }
};

module.exports = config;
