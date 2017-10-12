const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server);

const config = require('config')

var blockchain = require('blockchain.info')
var exchange = require('blockchain.info/exchange')

const FRONTEND_DIR = require('path').resolve(__dirname, './../docs')

app.use(express.static(FRONTEND_DIR))

app.get('*', function (req, res) {
  res.sendFile(require('path').resolve(FRONTEND_DIR, 'index.html'))
})

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(config.get('port'), function () {
  console.log(`Example app listening on port ${config.get('port')}!`)
})
