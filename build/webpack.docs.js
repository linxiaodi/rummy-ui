/**
 * 官网打包
 * */
const merge = require('webpack-merge');
const config = require('./webpack.base');
const { resolve, PORT } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pck = require('../package')

module.exports = merge(config, {
	stats: 'none',
	entry: {
		index: resolve('./example/index')
	},
	resolve: {
		alias: {
			'rummy-ui': resolve('lib/')
		}
	},
	output: {
		path: resolve('docs'),
		filename: '[name].[chunkhash:8].js',
		publicPath: pck.homepage
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('index.html'),
			inject: 'body'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash:8].css'
		})
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	}
});
