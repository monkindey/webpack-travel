var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	plugins: [
		new UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
}