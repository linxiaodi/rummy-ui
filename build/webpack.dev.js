const { merge } = require('webpack-merge');
const config = require('./webpack.base');
const { resolve, PORT } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

config.entry.index = ['react-hot-loader/patch', config.entry.index];

module.exports = merge(config, {
	stats: 'errors-only',
	target: 'web', // 不加会导致wds失效
	entry: {
		index: resolve('./example/md-test/app')
	},
	output: {
		path: resolve('dist'),
		filename: '[name].js',
		publicPath: '/'
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
		quiet: true,
		overlay: true, // 编译出现错误时，将错误直接显示在页面上
		stats: 'minimal'
	}
});
