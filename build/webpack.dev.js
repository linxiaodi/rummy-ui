const merge = require('webpack-merge')
const config = require('./webpack.base')

config.entry.index = ['react-hot-loader/patch', config.entry.index]

module.exports = merge(config, {
	devServer: {
		port: process.env.PORT || 3300,
		hot: true,
		hotOnly: true,
		after() {
			console.log(123)
		}
	}
})
