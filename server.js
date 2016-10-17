var express = require('express');
var app = express();
app.use(express.static('public'));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/work', function(req, res){
  res.sendfile(__dirname + '/public/work.html');
});
app.get('/directory', function(req, res){
  res.sendfile(__dirname + '/public/HCLabs.html');
});

app.get('/story', function(req, res){
  res.sendfile(__dirname + '/public/story.html');
});

app.get('/experience', function(req, res){
  res.sendfile(__dirname + '/public/experience.html');
});

app.get('/fancy', function(req, res){
  res.sendfile(__dirname + '/public/index_1.html');
});

app.get('/daily', function(req, res){
  res.sendfile(__dirname + '/public/daily.html');
});


app.get('/products', function(req, res){
  res.sendfile(__dirname + '/public/products.html');
});

// app.listen(5000, function () {
//  console.log('Example app listening on port 3000!');
// });

 app.listen(process.env.PORT, process.env.IP, function(){
   console.log(" I am listening on some port");
 });
