const webpack = require('webpack');

module.exports = {
    output: {
	filename: 'out.js'
    },
    entry: './index.js',
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
};
