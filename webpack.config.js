const path = require('path');

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'bundle.js',
        publicPath: '/lib/'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                // exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
              loader: 'url-loader',
              options: {
                limit: 10000
              }
            }
        ],
    }
};
