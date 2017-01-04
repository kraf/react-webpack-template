const webpack = require('webpack');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    devtool: production ? 'sourcemap' : 'eval',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css?$/,
                loaders: ['style-loader', 'css-loader?-url']
            },
            {
                test: /\.scss?$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};
