const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const config = require('config')

app.use(cookieParser())
app.use(bodyParser())
app.use(session({ secret: config.get('sessionSecret') }))
app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')
app.set('views', require('path').join(__dirname, '/views'))

const FRONTEND_DIR = require('path').resolve(__dirname, './../docs')
app.use(express.static(FRONTEND_DIR))

const authRouter = require('./controllers/auth')
app.use(authRouter)

app.get('*', function (req, res) {
  // res.sendFile(require('path').resolve(FRONTEND_DIR, 'index.html'))
  res.render('index', {
    currentUser: JSON.stringify(req.user ? { name: req.user.name } : null)
  })
})

server.listen(config.get('port'), function () {
  console.log(`Example app listening on port ${config.get('port')}!`)
})

// var blockchain = require('blockchain.info')
// var exchange = require('blockchain.info/exchange')
//
// io.on('connection', (socket) => {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });
