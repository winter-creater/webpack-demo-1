const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {

    mode: 'development',
    ...base,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    ...base,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],

            },
        ],
    },
};
