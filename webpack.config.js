var path = require('path')
var htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname,'./public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'file-loader',
            }
        ]
    },
    mode: 'development',
    plugins: [
        new htmlwebpackplugin({
            template: './src/index.html'
        })
    ]
}