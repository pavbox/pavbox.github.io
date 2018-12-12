const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const stylus_plugin = require('stylus-loader');


const config = {
  entry: './frontend/main.js',
  devtool: 'source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      },
      {
        test: /\.styl/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'file-loader?name=img/[name].[ext]'
      },
      {
        test: /\.(jpg|png|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name: './img/[name].[ext]'
        },
      }
  ]},

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: { compress: true }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './frontend/assets/index.html',
      filename: 'index.html'
    })
  ]
}


module.exports = config;
