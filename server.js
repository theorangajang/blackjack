import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.config.dev';
import api from './server/api/index';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client')));

//////////////////////////////////
////////////// API'S /////////////
//////////////////////////////////
app.use('/api', api);


//////////////////////////////////
///// WEBPACK AND HOT-RELOAD /////
//////////////////////////////////

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: {
        colors: true,
        chunks: false
    }
}));
app.use(webpackHotMiddleware(compiler));

app.get("/*", (req, res) => { //when inputting /* this catch-all on the server that sends /* to index.html
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

let server = app.listen(3000, () => {
    console.log('connected to port 3000')
});

export default server