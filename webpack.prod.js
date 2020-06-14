
const webpack = require('webpack')
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: {
        main: ['./client/src/index.js', './client/src/styles/main.less'],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].min.js',
        publicPath: './'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'file-loader' 
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
        }),
        new ExtractTextPlugin("[name].min.css", {
            allChunks: true
        }),
        new UglifyJSPlugin({}),
        new webpack.optimize.AggressiveMergingPlugin(),
        new OptimizeCSSAssetsPlugin({}),
        new webpack.DefinePlugin({
            BRAND_NAME: '',
            VERSION: `1.0.0`,
            IMG_PATH: `'./assets/'`,
            APP_MODE: `'${process.env.NODE_ENV}'`,
        }),
    ]
};