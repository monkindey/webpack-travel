var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var devFlagPlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});
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
		}),
		devFlagPlugin
	]
}