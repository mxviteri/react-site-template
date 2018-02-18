const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

const constants = require('./src/app/constants.json');

const ejsTemplate = new htmlWebpackPlugin({
    template: 'src/index.ejs'
});
const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].min.css",
    disable: !(process.env.NODE_ENV === "production")
});
const constantPlugin = new webpack.DefinePlugin({
  constants: JSON.stringify(constants)
});

module.exports = {
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, "lib"),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    watch: !(process.env.NODE_ENV === 'production'),
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                  use: [
                      { loader: 'css-loader' },
                      { loader: 'resolve-url-loader' },
                      { loader: 'sass-loader' }
                  ],
                  // use style-loader in development
                  fallback: "style-loader"
              })
            },
            {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
              loader: 'url-loader',
              options: {
                name: 'img/[name].[ext]',
                limit: 10000
              }
            },
            {
              test: /\.ico$/,
              loader: 'file-loader',
              options: {
                name: 'favicon.ico',
                limit: 10000
              }
            }
        ],
    },
    plugins: [
      ejsTemplate,
      extractSass,
      constantPlugin
    ],
    node: {
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }
};
