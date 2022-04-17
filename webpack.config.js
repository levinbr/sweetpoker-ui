const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill','./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js' 
    },
    devServer: {
        port: 3001
    },
    devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
        ] 
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}