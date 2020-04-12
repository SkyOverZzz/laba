let express = require('express')
let app = express()
const http = require('http')

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.get('/', function(req, res){
  res.render('index')
})

app.get('/cofe', function(req, res){
  res.render('cofe')
})


app.listen(3000)

//keep alive

setInterval(() => {
http.get(http://${process.env.PROJECT_DOMAIN}.glitch.me/)
}, 280000)