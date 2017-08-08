const path = require('path');
const { DefinePlugin } = require('webpack');
const entry = path.join(__dirname, 'index.js');

const alias = {};

['react', 'react-dom'].forEach(m => {
  let distFile = `dist/${m}.js`;

  if (isProd()) {
    distFile = `dist/${m}.min.js`;
  }

  alias[m] = path.join(require.resolve(m), '..', `${distFile}`);
});

function isProd() {
  return process.env.NODE_ENV === 'production';
}

function isExclude() {
  return process.env.NODE_ENV === 'exclude';
}

const config = {
  entry,
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  resolve: {
    alias
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: ['babel-loader'],
        exclude: isExclude() ? /node_modules/ : []
      }
    ]
  },
  plugins: []
};

module.exports = config;
