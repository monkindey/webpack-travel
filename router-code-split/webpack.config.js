var path = require('path');

module.exports = {
	entry: './index.js',
	output: {
		filename: 'dist.js',
		path: path.resolve(__dirname, 'assets'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['es2015', {
							modules: false
						}],

						'react',

						'stage-2'
					],
					plugins: ['syntax-dynamic-import']
				}
			}]
		}]
	}
};