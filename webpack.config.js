const path = require('path')
const {
  NODE_ENV = 'production',
} = process.env;
module.exports = {
  entry: './index.ts',
  target: 'node',
  mode: NODE_ENV,
  watch: NODE_ENV === 'development',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
