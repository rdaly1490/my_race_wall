var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.engine('html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

var staticDirs = ['photos', 'styles', 'otherJs'];
staticDirs.forEach(function(dir) {
	app.use(express.static(__dirname + '/client/' + dir));
});

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res) {
  res.render('home.html');
});

app.get('/racewall*', function(req, res) {
  res.render('index.html');
});

app.listen(7770, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:7770');
});
