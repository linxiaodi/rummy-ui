const { resolve, isPro, mode, PORT } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log(process.env.NODE_ENV)

module.exports = {
  entry: {
    index: resolve('lib/index.tsx')
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/'
  },
  mode,
  stats: 'errors-only',
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', 'jsx', '.css', '.scss'],
    alias: {
      '@': resolve('lib'),
      'react-dom': '@hot-loader/react-dom',
      'rummy-ui': resolve('lib'),
      'classnames': resolve('classnames'),
      'DemoCode': resolve('example/DemoCode.jsx'),
    },
    fallback: {
      util: false,
      stream: false
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [isPro ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        use: [
          isPro ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [resolve('lib/style/index.scss'), resolve('lib/style/mixin-layout.scss')]
            }
          }
        ]
      },
      {
        test: /\.md$/,
        // use: [require('./md-loader/index')]
        use: [
          'babel-loader',
          {
            loader: path.resolve(__dirname, './md-loader/index.js'),
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new CleanWebpackPlugin()
  ]
};
