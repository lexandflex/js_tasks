const path = require('path')
module.exports = {
  entry: './exercises/tasks.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
