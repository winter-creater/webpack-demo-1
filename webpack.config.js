const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    mode: 'development',
    //入口文件
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        //filename: 'index.js',//转译出口文件
        filename: '[name].[contenthash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            // filename: 'assets/admin.html',//转译的文件目录
            template: './src/assets/index.html'//本地文件路径
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
            ignoreOrder: false,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                // use: [
                //     {
                //         loader: MiniCssExtractPlugin.loader,
                //         options: {
                //             publicPath: '../',
                //             hmr: process.env.NODE_ENV === "development",
                //         },
                //     },
                //     "css-loader"
                // ],
            },
        ],
    },
};
