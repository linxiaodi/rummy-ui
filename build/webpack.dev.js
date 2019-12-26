const merge = require('webpack-merge');
const config = require('./webpack.base');
const { resolve, PORT } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

config.entry.index = ['react-hot-loader/patch', config.entry.index];

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
			template: resolve('index.html')
		}),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: [`You application is running here http://localhost:${PORT}`],
				notes: ['Some additional notes to be displayed upon successful compilation']
			}
		})
	],
	devServer: {
		port: PORT,
		hot: true,
		historyApiFallback: true,
		stats: 'errors-only'
	}
});
