var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    mode: 'development',
    //入口文件
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        //filename: 'index.js',//转译出口文件
        filename: '[name].[contenthash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        // filename: 'assets/admin.html',//转译的文件目录
        template: './src/assets/index.html'//本地文件路径
    })],
};
