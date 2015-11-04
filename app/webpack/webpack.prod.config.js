var config  = require("./webpack.config.js");

var prodConfig = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  plugins: config.plugins,

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel?stage=0" },
    ].concat(config.module.loaders),
  },
};

module.exports = prodConfig;
