import path from 'path';
import webpack from 'webpack';

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.join(__dirname, 'client/index')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'client')
            }
        ]
    },
    resolve:{
        extensions: ['', '.js']
    }
}