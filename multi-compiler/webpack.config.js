module.exports = [
  {
    entry: './entry1.js',
    output: {
      path: __dirname,
      filename: 'output1/bundle.js'
    }
  },
  {
    entry: './entry2.js',
    output: {
      path: __dirname,
      filename: 'output2/bundle.js'
    }
  }
];
