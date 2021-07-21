const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',//入口文件
    output: {
        // path: path.resolve(__dirname, 'dist'),
        //filename: 'index.js',//转译出口文件
        filename: '[name].[contenthash].js'
    },
};