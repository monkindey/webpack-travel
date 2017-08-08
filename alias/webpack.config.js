const path = require('path');
const { DefinePlugin } = require('webpack');
const entry = path.join(__dirname, 'index.js');

const alias = {};

['react', 'react-dom'].forEach(m => {
  let distFile = `dist/${m}.js`;

  if (isNotAlias()) {
    return false;
  }

  if (isProd()) {
    distFile = `dist/${m}.min.js`;
  }

  alias[m] = path.join(require.resolve(m), '..', `${distFile}`);
});

function isNotAlias() {
  return process.env.NODE_ENV === 'notAlias';
}

function isProd() {
  return process.env.NODE_ENV === 'production';
}

function isDebug() {
  return process.env.NODE_ENV === 'debugger';
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
        use: ['babel-loader']
      }
    ]
  },
  plugins: []
};

if (isDebug()) {
  console.log('debugging');
  // 用react dist, 是它帮我们生成好的
  delete config.resolve.alias;
  config.plugins.push(
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  );
}

module.exports = config;
