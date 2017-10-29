const path = require('path');

module.exports = {
  //inform that the bundle generated it's for node and not browser
  target: 'node',

  //root file
  entry: './src/index.js',

  //output
  output: {
    filename : 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },

  //specify webpack dependency
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env',{
              targets: {
                browsers: ['last 2 versions']
              }
            }]
          ]
        }
      }
    ]
  }
};
