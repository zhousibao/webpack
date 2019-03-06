const webpack = require("webpack")
const merge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const path = require("path")

const productionConfig = require("./webpack.prod.conf")
const developmentConfig = require("./webpack.dev.conf")


/**
 * 根据不同的环境，生成不同的配置
 * @param {String} env "development" or "production"
 */
const commonConfig = env => {
  //将需要的loader和plugin单独申明
  let scriptLoader = [
    {
      loader:'babel-loader'
    }
  ]

  let cssLoader = [
    {
      loader: 'css-loader',
    }
  ]

  let styleLoader = env === 'production' ?
  ExtractTextPlugin.extract({
    fallback: {
      loader: 'style-loader'
    },
    use: cssLoader
  })
  : 
  cssLoader

  return {
    entry: {
      app: './src/app.js'
    },
    output: {
      publicPath: env === 'development' ? '/' : __dirname + '/../dist/',
      path: path.resolve(__dirname, '..', 'dist'),
      filename: '[name]-[hash:5].bundle.js',
      chunkFilename: '[name]-[hash:5].chunk.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: scriptLoader,
          exclude: /(node_modules)/
        },
        {
          test: /\.css$/,
          use: styleLoader
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '..', 'index.html'),
        chunks: ['app'],
        minify: {
          collapseWhitespace: true
        }
      }),
      new webpack.ProvidePlugin({
        $: 'jquery'
      })
    ]
  }
}

module.exports = env => {
  let config = env === "production" ? productionConfig : developmentConfig
  return merge(commonConfig(env),config)
}