const path = require('path');

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve('./builds/'),
        publicPath: '/public/assets/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015'
            },
            {
                test: /\.scss/,
                loader: 'style!css!sass'
            },
            {
                test: /\.html/,
                loader: 'html'
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url?limit=10000'
            }
        ]
    },
    devServer: {
        port: 9000
    },
    devtool: 'inline-source-map'
};