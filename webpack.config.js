var path = require('path');

module.exports = {
    entry: './src/js/app.js',
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
            }
        ]
    },
    watch: true
};