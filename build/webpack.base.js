const { resolve, isPro, mode } = require('./utils');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

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
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', 'jsx', '.css', '.scss'],
		alias: {
			'@': resolve('src'),
			'react-dom': '@hot-loader/react-dom'
		}
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ['awesome-typescript-loader'],
				exclude: [/node_modules/]
			},
			{
				test: /\.jsx?$/,
				loader: require.resolve('babel-loader')
			},
			{
				test: /\.css$/,
				use: isPro ? ExtractTextPlugin.extract({
					use: [
						'css-loader'
					]
				}) : ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: isPro
					? ExtractTextPlugin.extract({
						use: [
							'style-loader',
							'css-loader',
							'sass-loader',
							{
								loader: 'style-resources-loader',
								options: {
									patterns: [
										resolve('lib/style/*.scss'),
									]
								}
							}
						]
					})
					: [
						'style-loader', 'css-loader', 'sass-loader', {
							loader: 'style-resources-loader',
							options: {
								patterns: [
									resolve('lib/style/*.scss'),
								]
							}
						}]
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(
				process.env.NODE_ENV || 'development')
		})
	].concat(isPro ? [
		new ExtractTextPlugin({
			filename: 'css/[name].css'
		})
	] : [])
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

