const path = require('path')

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'stylesora.js',
    path: path.resolve(__dirname, 'dist')
  }
}