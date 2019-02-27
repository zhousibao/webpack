const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './',
    filename: '[name]-[hash:5].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
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
                modules: true,
                localIdentName: '[name]_[local]_[hash:base64:5]'
              }
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
              outputPath: 'img/',
              useRelativePath: true
            }
          }

        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src','img:data-src']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]-[hash:5].min.css',
      allChunks: false
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html', //默认即为index.html
      template: './index.html',
      chunks: ["app"], // entry中的app入口才会被打包入index.html
      minify: { //压缩生成的html
        collapseWhitespace: true
      }
    }) 
  ],
  mode: 'development'
}   