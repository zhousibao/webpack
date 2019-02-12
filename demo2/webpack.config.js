const path = require('path')
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['babel-preset-env',{
                targets: {
                  browsers: ['>1%','last 2 versions']
                }
              }]
            ]
          }
        },
        exclude: '/node_modules/'
      }
    ]
  },
  mode: 'development'
}