const path = require('path')
module.exports = {
  entry: {
    app:'./src/main.js'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname,'dist')
  },
  mode: 'development'
}