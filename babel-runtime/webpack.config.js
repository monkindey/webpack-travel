const webpack = require('webpack');
const path = require('path');

module.exports = function() {
  const env = process.env.NODE_ENV;
  const babelPlugins = [];

  if (env === 'runtime') {
    babelPlugins.push(['transform-runtime']);
  } else {
    babelPlugins.push(['transform-object-assign']);
  }

  const config = {
    entry: './src/entry.js',
    output: {
      path: __dirname + '/dist',
      publicPath: '/dist/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: path.resolve(__dirname, './src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015'],
              plugins: babelPlugins
            }
          }
        }
      ]
    }
  };
  return config;
};
