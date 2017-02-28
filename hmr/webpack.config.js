var path = require('path');

var webpack = require('webpack');
var resolve = path.resolve;

module.exports = {
	entry: [
		'react-hot-loader/patch',
		// 加上websocket的监听事件
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, 'dist'),
		publicPath: '/'
	},

	// context: resolve(__dirname, 'src'),

	devtool: 'inline-source-map',

	devServer: {
		// enable HMR on the server
		hot: true,

	    host: 'localhost',

		port: 3000,

		// match the output path
		// contentBase: resolve(__dirname, 'dist'),

		// match the output `publicPath`
		// publicPath: '/'
	},

	module: {
		rules: [{
			test: /\.js$/,
			use: [
				'babel-loader',
			],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader?modules'
			],
		}, ],
	},

	plugins: [
		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),

		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin()
	]
}