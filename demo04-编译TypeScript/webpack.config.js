const path = require('path')
module.exports = {
  entry: {
    'main': './src/main.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  mode: 'development'
}