const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    entry1: './entry1.js',
    entry2: './entry2.js'
  },
  output: {
    path: __dirname,
    filename: 'build/[name].js'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.resolve(
        __dirname,
        './build/lib/shared-manifest.json'
      ))
    })
  ]
};
