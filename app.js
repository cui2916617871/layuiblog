var path = require('path')
var express = require('express');
var routes = require('./routes')
var app = express();
//引入模板引擎
var ejs = require('ejs');

//设置模板引擎为ejs
app.set('view engine', 'ejs')
//设置模板引擎目录
app.set('views', './views')

app.use(express.static(path.join(__dirname, 'public')))

routes(app)

app.listen(3000);
console.log('listening to port 3000');
