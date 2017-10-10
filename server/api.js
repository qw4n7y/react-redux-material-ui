const express = require('express')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server);

const config = require('config')

var blockchain = require('blockchain.info')
var exchange = require('blockchain.info/exchange')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(express.static(require('path').resolve(__dirname, './../public')))

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

server.listen(config.get('port'), function () {
  console.log(`Example app listening on port ${config.get('port')}!`)
})
