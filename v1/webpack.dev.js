
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, './src')

module.exports = {
    entry: {
        main: ['./client/src/index.js', './client/src/styles/main.less'],
    },
    mode: "development",
    output: {
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        port: 5000,
        openPage: 'dist/'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                },
            },
        },
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
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'file-loader' 
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: `./index.html`,
            filename: `${BUILD_DIR}/index.html`
        }),
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
        }),
        new webpack.DefinePlugin({
            BRAND_NAME: ``,
            VERSION: `'1.0.0'`,
            IMG_PATH: `'assets/'`,
            APP_MODE: `'${process.env.NODE_ENV}'`,
        })
    ]
};