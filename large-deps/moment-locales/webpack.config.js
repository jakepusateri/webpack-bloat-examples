const webpack = require('webpack');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    output: {
	filename: 'out.js'
    },
    entry: './index.js',
    plugins: [new UglifyJsPlugin()]
};
