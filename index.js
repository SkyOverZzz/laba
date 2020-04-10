const http = require('http')
let express = require('express')
let app = express()


app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

app.get('/', function(req, res){
  res.render('index')
})

app.get('/coffe', function(req, res){
  res.render('coffe')
})


app.listen(5000)
 
setInterval(function () {
  http.get('http://'+ process.env.PROJECT_DOMAIN+ '.glitch.me/')
}, 280000)