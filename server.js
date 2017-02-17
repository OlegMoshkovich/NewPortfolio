var express = require('express');
var app = express();
app.use(express.static('public'));

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

app.get('/fancy', function(req, res){
  res.sendfile(__dirname + '/public/index_1.html');
});

app.get('/daily', function(req, res){
  res.sendfile(__dirname + '/public/daily.html');
});

app.get('/products', function(req, res){
  res.sendfile(__dirname + '/public/products.html');
});

app.get('/Safety', function(req, res){
  res.sendfile(__dirname + '/public/Safety.html');
});

app.get('/UN', function(req, res){
  res.sendfile(__dirname + '/public/UN.html');
});

app.get('/vr-as', function(req, res){
  res.sendfile(__dirname + '/public/VR-AS.html');
});

app.get('/wtc', function(req, res){
  res.sendfile(__dirname + '/public/wtc.html');
});

app.get('/dgh', function(req, res){
  res.sendfile(__dirname + '/public/dgh.html');
});

app.get('/esa', function(req, res){
  res.sendfile(__dirname + '/public/esa.html');
});

app.get('/pilot', function(req, res){
  res.sendfile(__dirname + '/public/pilot.html');
});

app.get('/vc', function(req, res){
  res.sendfile(__dirname + '/public/vc.html');
});
app.get('/harold', function(req, res){
  res.sendfile(__dirname + '/public/harold.html');
});

app.get('/nasa', function(req, res){
  res.sendfile(__dirname + '/public/nasa.html');
});

app.get('/work', function(req, res){
  res.sendfile(__dirname + '/public/work.html');
});

app.get('/ribbon', function(req, res){
  res.sendfile(__dirname + '/public/ribbon.html');
});

app.get('/w', function(req, res){
  res.sendfile(__dirname + '/public/W.html');
});

app.get('/control', function(req, res){
  res.sendfile(__dirname + '/public/control.html');
});

app.get('/react', function(req, res){
  res.sendfile(__dirname + '/public/react.html');
});

app.get('/network', function(req, res){
  res.sendfile(__dirname + '/public/network.html');
});

app.get('/hcs', function(req, res){
  res.sendfile(__dirname + '/public/directorysafety.html');
});

app.get('/israel', function(req, res){
  res.sendfile(__dirname + '/public/israel.html');
});

app.get('/61b', function(req, res){
  res.sendfile(__dirname + '/public/61b.html');
});

app.get('/love', function(req, res){
  res.sendfile(__dirname + '/public/love.html');
});

app.get('/cabin', function(req, res){
  res.sendfile(__dirname + '/public/cabin.html');
});

app.get('/projects', function(req, res){
  res.sendfile(__dirname + '/public/projects.html');
});

// app.listen(5000, function () {
//  console.log('Example app listening on port 3000!');
// });
 //
 app.listen(process.env.PORT, process.env.IP, function(){
   console.log(" I am listening on some port");
 });
