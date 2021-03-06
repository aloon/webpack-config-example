var webpack = require('webpack'),
  path = require('path');

module.exports = {

  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
