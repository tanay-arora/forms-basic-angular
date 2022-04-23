const fs= require('fs')
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors())
app.get('/', function(req,res){
    fs.readFile('./form.html',function(err,data){
        if(err) return res.send("404 Not Found!")
        res.end(data)
    })
})
app.get('/css/styles.css',function(req,res){
    fs.readFile('./css/styles.css',function(err,data){
        if(err) return res.send("404 Not Found!")
        res.end(data)
    })
})
app.get('/css/bootstrap.css',function(req,res){
    fs.readFile('./css/bootstrap.css',function(err,data){
        if(err) return res.send("404 Not Found!")
        res.end(data)
    })
})
app.get('/images/logo.webp',function(req,res){
    fs.readFile('./images/logo.webp',function(err,data){
        if(err) return res.send("404 Not Found!")
        res.end(data)
    })
})
app.get('/images/thankyou.webp',function(req,res){
    fs.readFile('./images/thankyou.webp',function(err,data){
        if(err) return res.send("404 Not Found!")
        res.end(data)
    })
})
app.get('/images/banner.webp',function(req,res){
    fs.readFile('./images/banner.webp',function(err,data){
        if(err) return res.send("404 Not Found!")
        res.end(data)
    })
})
var server = app.listen(8000, ()=>{
    var port = server.address().port
    console.log("Node server listening at port:",port)
})