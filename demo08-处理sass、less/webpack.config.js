var path = require('path')

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
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insertInto: '#css', 
              singleton: true,
              transform: './css.transform.js'
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]_[local]_[hash:base64:5]'
            }
          },
          {
            loader:'sass-loader'
          }
        ]
      }
    ]
  },
  mode: 'development'
}   