
var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = {
entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
},

resolve: {
    extensions: ['*', '.js', '.ts']
},

module: {
    loaders: [
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
           test: /\.css$/,
           loaders: ['to-string-loader', 'css-loader']
        }
    ]},
    
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: helpers.reverse(['polyfills', 'vendor', 'app']),
			minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
			chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'app'])
        }),
		new webpack.ContextReplacementPlugin(
			/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
			path.resolve(__dirname, '../src')
		)
    ]
};
