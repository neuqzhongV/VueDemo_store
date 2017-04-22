const webpack = require('webpack')
const htmlplugin = require('html-webpack-plugin')
const path = require('path')
// import是在我们写的最终在浏览器中执行的js中
// node不能直接执行import写法

const obj = {

// 指定入口js文件
  entry:  './src/main.js',
  output: {
    // 指定打包之后合并的js文件的生成目录
    path: path.join(__dirname, './dist'),

    // 指定打包之后合并的js的文件名
    // [name]表示entery的属性名
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.css$/,
        loader:'style-loader!css-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },

      // 因为bootstrap的css里引入了字体，所以必需要处理2
      {
        test:/\.(eot|ttf|woff|woff2|svg)$/,
        // 'npm install file-loader --save-dev'
        // ?name=aaa.xx2x是给test匹配的文件起个名字
        // 
        // loader: 'file-loader?name=aaa.xxx'
        // [name] 表示原来的文件名
        // [ext] 表示原来的文件的后缀名
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test:/\.(jpg|jpeg|png|gif|bmp)$/,
        // 'npm install file-loader --save-dev'
        // ?name=aaa.xx2x是给test匹配的文件起个名字
        // 
        // loader: 'file-loader?name=aaa.xxx'
        // [name] 表示原来的文件名
        // [ext] 表示原来的文件的后缀名
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.vue$/,
        // vue-loader包的作用是将*.vue后缀的文件内容改为js代码
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new htmlplugin({
      // 把./src/index.html复制到www目录，然后在复制后的index.html中
      // 引入打包后生成的js文件!
      template: './src/index.html'
    })

    // 把vender属性里的包单独打包到third.js文件
    ]
}

// 最终要暴露一个对象
module.exports = obj
