module.exports = {
	entry: './entry.js',
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.(png|jpg)$/,
			// when image size < 8K will be processd to base64
			loader: 'url-loader?limit=8192&name=[name].[ext]'
		}]
	}
}