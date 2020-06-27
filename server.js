var Express = require('express');
var App = Express();
const url = require('url');
var request = require('request');
const { Console } = require('console');
const deasync = require('deasync');
App.set('view engine', 'ejs');
App.use(Express.static('public'));

App.get('/', function (req, res) {
  res.render('default');
});
var Server = App.listen(80, function () {
  console.log('listening to port 80');
});
