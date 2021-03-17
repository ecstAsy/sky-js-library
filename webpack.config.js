// node 核心模块，处理相关路径
const path = require('path');
// webpack插件，新版本用法与webpack中文网上写的有点出入，需要注意
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 引入模块文件 看你需不需要
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'sky-js-library',
  },
  plugins: [
    new CleanWebpackPlugin(),
    //  new HtmlWebpackPlugin({ template: './src/index.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}