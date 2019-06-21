var http = require('http');
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({extended:false}));

app.set('views',path.join(__dirname,'templates'));
app.set('view engine','pug');

app.get("/",function(req,res){
  return res.render("index",{title: "Hello World"});
});
app.get("/form",function(req,res){
  return res.render("form");
});
app.post("/form",function(req,res){
  return res.render("result",{username:req.body.username,message:req.body.message});
});

var server = http.createServer(app);
server.listen(3000);
