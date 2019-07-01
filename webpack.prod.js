const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode: 'production', 
    devtool: 'source-map',   
    module: {
        rules: [{
            test: /\.(css|scss)$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader", 
                "sass-loader" 
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public/css','public/index.js']),
        new MiniCssExtractPlugin({               
            filename: "css/[name].css"
        })            
    ]
});