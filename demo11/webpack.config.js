const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        use: ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: { 
              singleton: true
            }
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                //modules: true,
                //localIdentName: '[path][name]_[local]_[hash:base64:5]'
              }
            },
            {
              loader:'postcss-loader',
              options: {
                ident: 'postcss',
                plugins:[
                  require('postcss-sprites')({ //配置雪碧图
                    spritePath: './dist/assets/sprites'
                  }) 
                ]
              }
            },
            {
              loader:'sass-loader'
            } 
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name]-[hash:5].[ext]',
          //     publicPath: '',
          //     outputPath: 'assets/',
          //     useRelativePath: true
          //   }
          // },
          {
            loader: 'url-loader',
            options: {
              limit: 1000, // 小于此值的的图片会被转换为base64
              name: '[name]-[hash:5].[ext]',
              publicPath: '',
              outputPath: 'assets/',
              useRelativePath: true
            }
          }

        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].min.css',
      allChunks: false
    })
  ],
  mode: 'development'
}   