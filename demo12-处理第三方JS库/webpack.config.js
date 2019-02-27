const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        // 方法 2
        test: path.resolve(__dirname,"src/app.js"),
        use:  [
          {
            loader: 'imports-loader',
            options: {
              //$:'jquery',
              jQuery:'jQuery'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      jQuery: path.resolve(__dirname,"src/libs/jquery.min.js")
    }
  },
  plugins: [
    // 方法 1
    new webpack.ProvidePlugin({
      $:'jquery',
      //jQuery:'jQuery'
    })
  ],
  mode: 'development'
}   