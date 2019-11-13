const merge = require('webpack-merge');
const config = require('./webpack.base');
const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config.entry.index = ['react-hot-loader/patch', config.entry.index];

module.exports = merge(config, {
	entry: {
		index: resolve('./example/index')
	},
	resolve: {
		alias: {
			'fisher-ui': resolve('lib/')
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('index.html')
		})
	],
	devServer: {
		port: process.env.PORT || 3300,
		hot: true,
		historyApiFallback: true
	}
});
