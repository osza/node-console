var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var plugins = [
  new HTMLWebpackPlugin({
    template: './src/index.html',
  }),
  new CopyWebpackPlugin([{
    from: './src/style.css'
  }]),
];

if (process.env['PRODUCTION']) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  );
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  plugins: plugins
}
