const path = require('path');

const resolve = (p) => path.resolve(__dirname, '../', p);

const isPro = process.env.NODE_ENV === 'production'

const PORT = process.env.PORT || 3300;

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production'

module.exports = {
	resolve,
	isPro,
	mode,
	PORT
}
