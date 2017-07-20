var express = require('express');
var path = require('path');

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config.dev.js');

var users = require('./routers/users');

let app = express();

app.use('/api/users', users);

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
    res.sendfile(path.join(__dirname, '../client/index.html'));
});

var port = Number(process.env.PORT || 3000)

app.listen(port, () => console.log('Server is running'));