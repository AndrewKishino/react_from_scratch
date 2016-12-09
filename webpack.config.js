const path = require('path')
const autoprefixer = require('autoprefixer')
const WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  context: __dirname,
  entry: [
    'babel-polyfill',
    './src/App.jsx',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, '/src')
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap', 'postcss-loader'],
        include: path.join(__dirname, '/src')
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] })
  ],
  plugins: [
    new WebpackNotifierPlugin()
  ]
}
