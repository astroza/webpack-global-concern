const webpack = require('webpack')
const path = require('path')

module.exports = {
  node: {
    global: true,
  },
  optimization: {
    minimize: false,
  },
  entry: path.resolve('index.js'),
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname),
  },
  plugins: [
    new webpack.DefinePlugin({'global.test': JSON.stringify('test')})
  ]
}
