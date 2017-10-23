var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

var libraryName = 'vuex-api';
var outputFile = libraryName + '.js';

var config = merge(baseWebpackConfig,{
  entry: path.resolve(__dirname, '../src/plugin/index.js'),
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    })
  ],
  externals: {
    "axios": "axios",
    "vue": "vue",
  }
});

module.exports = config;
