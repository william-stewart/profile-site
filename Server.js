require('dotenv').config();
var moment = require('moment');
var express = require("express");
var app = express();
var router = express.Router();
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));
const mysql = require('mysql');
var path = __dirname + '/ws/views/';
app.use('/',router);
app.use('/ws/assets',express.static(path + '/assets'));
let tools = require('./tools/tools.js');
let db = require('./tools/database.js');

//START general routing
router.get('/ws',function(req, res){
  res.sendFile(path + 'index.html');
});

router.get('/ws/index.html',function(req, res){
  res.sendFile(path + 'index.html');
});

router.get('/ws/index.html#skills',function(req, res){
  res.sendFile(path + 'index.html#skills');
});

router.get('/ws/index.html#projects',function(req, res){
  res.sendFile(path + 'index.html#projects');
});

router.get('/ws/contact.html',function(req, res){
  res.sendFile(path + 'contact.html');
});

router.get('/ws/cv.html',function(req, res){
  res.sendFile(path + 'cv.html');
});

router.get('/ws/trade.html',function(req, res){
  res.sendFile(path + 'trade.html');
});
//END general routing

//START Trend Trader App
app.get('/ws/testapicall', (req, res) => {
  console.log('Received call from client');
  res.send('Successful call from server');
});

app.get('/ws/getchartdata/:chartName', async (req,res) => {
  const chartName = req.params.chartName;

  if (chartName === 'top5stocks') {
    try {
      db.getTop5Stocks(function(err,results) {
        if(err) { res.send(500,"Server error"); return; } 
        res.json(results);
      });
    } 
    catch (err) { console.log('failed database connection' );}
  } 
  else if (chartName === 'top5strats') {
    try {
      db.getTop5Strats(function(err,results) {
        if(err) { res.send(500,"Server error"); return; } 
        res.json(results);
      });
    } 
    catch (err) { console.log('failed database connection' );}
  } 
  else {
    res.json({ "results": "invalid chart name" });
  }

})

app.get('/ws/getchartdatatest/:chartName', async (req,res) => {
    const chartName = req.params.chartName;
    var chartData;

    // Create actual chart data
    if (chartName === 'chartFromDatabase'){
      try {
      db.getChartFromDatabase(function(err,results) {
        if(err) {res.send(500,"Server error"); return; } 
        res.json(results);
      });
    } 
    catch (err) { console.log('failed database connection' );}
    } 
    else {
      chartData = tools.createChart(chartName);
    }

    res.json(chartData);
})
//END of Trend Trader App

app.use('/ws/*',function(req, res){
  res.send('Error 404: Not Found in portfolio');
});

app.listen(8081,function(){
  console.log("Server running at Port 8081");
});