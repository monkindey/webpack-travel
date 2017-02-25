var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/js/entry.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: 'css-loader'
			})
		}, {
			test: /\.(png|jpg)/,
			use: 'url-loader?limit=8000&name=img/[name].[ext]'
		}]
	},
	plugins: [
		new ExtractTextPlugin('css/[name].css')
	]
}


