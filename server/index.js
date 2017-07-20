var express = require('express');
var path = require('path');

var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackConfig = require('../webpack.config.dev.js');

var users = require('./routers/users');

let app = express();

app.use('/api/users', users);

app.use(webpackMiddleware(webpack(webpackConfig)));

/*=====================SocketIO====================*/
var server = require("http").Server(app);
var io = require("socket.io")(server)

io.on("connection", function(socket) {
    console.log(`Co nguoi vua ket noi ${socket.id}`);

    socket.on("disconnect", function() {
        console.log(socket.id + " ngat ket noi!!!!")
    });

    socket.on("Client-send-chat", function(data) {
        io.sockets.emit("Server-send-chat", data);
    })
})

/*=================================================*/

app.get('/*', (req, res) => {
    res.sendfile(path.join(__dirname, '../client/index.html'));
});

var port = Number(process.env.PORT || 3000)

server.listen(port, () => console.log('Server is running'));