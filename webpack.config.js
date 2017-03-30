'use strict'
var webpack = require('webpack')
var isProdEnvironment = (process.env.NODE_ENV === 'production')
var path = require('path');

module.exports = {
  cache:    true,
  devtool: isProdEnvironment ? 'source-map' : 'cheap-module-eval-source-map',
  context: __dirname,
  entry: './src/client/registry.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './public/javascript'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets:  [
              "es2015",
              "es2016",
              "react"
            ],
            plugins: ["transform-object-rest-spread"]
          }
        }],
        exclude: /node_modules/,
      },
    ],
  },
}
