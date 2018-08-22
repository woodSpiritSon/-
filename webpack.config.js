const path = require('path')

const HtmlWebpackPlugin = require("html-webpack-plugin")

const htmlWebpackPlugin = new HtmlWebpackPlugin ({
    // 设置模板文件的路径
    template:path.join(__dirname,'./template.html'),
    // 设置生成在内存中的文件名称
    filename:'index.html'
})


module.exports = {
    mode:"development",
    plugins:[
        htmlWebpackPlugin
    ],
    module: { //要打包的第三方模块
        rules: [
          { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
          { test: /\.ttf|svg|eot|woff|woff2$/, use: 'url-loader' }, // 处理字体文件
          { test:/\.jpg|png|gif|bmp$/,use:'url-loader' },
          { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:6]', 'sass-loader'] }, // 打包处理 scss 文件的 loader
          { test:/\.css$/,use:['style-loader','css-loader'] }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示，这几个文件的后缀名，可以省略不写
        alias: {
            '@': path.join(__dirname, './src')
        }
      }
}