const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './entry.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
