const { resolve, isPro, mode, PORT } = require('./utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const CleanWebpackPackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: resolve('lib/index.tsx'),
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    publicPath: '/',
  },
  mode,
  stats: 'errors-only',
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', 'jsx', '.css', '.scss'],
    alias: {
      '@': resolve('lib'),
      'react-dom': '@hot-loader/react-dom',
      'rummy-ui': resolve('lib'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isPro ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader'],
        exclude: [/node_modules/],
      },
      {
        test: /\.jsx?$/,
        loader: require.resolve('babel-loader'),
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
              patterns: [
                resolve('lib/style/index.scss'),
                resolve('lib/style/mixin-layout.scss'),
              ],
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: ['raw-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    }),
    new CleanWebpackPackPlugin(),
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: "initial",
  //         test: /vue|vue-router|vuex/,
  //         name: "vendor", // 使用 vendor 入口作为公共部分
  //         enforce: true,
  //       },
  //       manifest: {
  //         chunks: 'all',
  //         name: 'manifest'
  //       }
  //     }
  //   }
  // }
};
