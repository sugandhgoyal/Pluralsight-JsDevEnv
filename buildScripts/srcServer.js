var express = require('express');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
/* eslint-disable no-debugger */
var port=3000;
var app= express();
 var comppiler = webpack(config);

app.use(require('webpack-dev-middleware')(comppiler,{
  noInfo:true,
  publicPath:config.output.publicPath
}));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/src/index.html'));

});
app.listen(port,function(err){
  if(err) {
    console.log(err);
  }else{
    open('http://localhost:'+ port);
  }
})
