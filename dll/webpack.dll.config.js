const path = require('path');
const webpack = require('webpack');
const lib = path.resolve(__dirname, 'build', 'lib');

module.exports = {
  entry: {
    // Must be an array, or else will throw
    // `DllPlugin: supply an Array as entry`
    shared: ['./shared/index.js']
  },
  output: {
    path: lib,
    filename: '[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(lib, '[name]-manifest.json'),
      name: '[name]'
    })
  ]
};
