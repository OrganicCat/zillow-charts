var express = require('express');
var Client = require('node-rest-client').Client;
var router = express.Router();

client = new Client();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  /*
  client.get("https://www.quandl.com/api/v1/datasets/ZILLOW/MHOOD_PCTOFHOMESSELLINGFORGAIN_ALLHOMES_SOUTHCHICAGOCHICAGOIL.json?auth_token=vRECm7fWxKfiKUZrsHhG", function(data, response) {
    console.log("data received");
    res.render('index', { title: 'Express', data: data });
  });
  */
  
});

module.exports = router;
