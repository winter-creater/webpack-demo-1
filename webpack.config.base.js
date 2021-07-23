const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');



module.exports = {
    // mode: 'development',
    //入口文件
    entry: './src/index.js',
    output: {
        // path: path.resolve(__dirname, 'dist'),
        //filename: 'index.js',//转译出口文件
        filename: '[name].[contenthash].js'
    },
    // devtool: 'inline-source-map',
    // devServer: {
    //     contentBase: './dist',
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            // filename: 'assets/admin.html',//转译的文件目录
            template: './src/assets/index.html'//本地文件路径
        }),
    ],

    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                ],
            },
            {
                test: /\.less$/i,
                use: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            },
        ],
    },
};
