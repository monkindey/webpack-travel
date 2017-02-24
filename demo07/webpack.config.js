var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract(["css"])
		}, {
			test: /\.(png|jpg)/,
			loader: 'url?limit=8000&name=[name].[ext]'
		}]
	},
	plugins: [
		new ExtractTextPlugin("[name].css")
	]
}