const config = require('./webpack.base')
const merge = require('webpack-merge')

module.exports = merge(config, {
	mode: 'production',
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: 'React',
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: 'ReactDOM',
		},
	}
})