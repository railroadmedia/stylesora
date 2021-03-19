const path = require('path')
const MergeIntoSingle = require('webpack-merge-and-include-globally');
const uglifyJS = require('uglify-js');

module.exports = {
  entry: './src/js/',
  output: {
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new MergeIntoSingle({
      files: {
        'stylesora.js': [
          'node_modules/alpinejs/dist/alpine.js',
          './src/js/Page.js'
        ]
      },
      transform: {
        'stylesora.js': code => require("uglify-js").minify(code).code
      }
    })
  ]
}