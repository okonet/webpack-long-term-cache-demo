const path = require('path');
const webpack = require('webpack');

/**
 * These are all webpack plugins used to make work
 * long term caching
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

const resolvePath = require('./helpers/resolve-path');

module.exports = {
  entry: {
    app: resolvePath('src/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [
      resolvePath('node_modules'),
      resolvePath('src')
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['manifest']
    }),
    new HtmlWebpackPlugin({
      template: resolvePath('webpack/html/index.ejs'),
      env: process.env
    }),
    new InlineManifestWebpackPlugin({
      name: 'webpackManifest'
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
