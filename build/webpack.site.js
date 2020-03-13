/**
 * 官网打包
 * */

const merge = require('webpack-merge');
const config = require('./webpack.base');
const { resolve, PORT } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

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
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('index.html'),
			inject: 'body'
		}),
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
