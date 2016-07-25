var express = require('express');
var app = express();
app.use(express.static('public'));
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

// app.listen(3000, function () {
//  console.log('Example app listening on port 3000!');
// });


 app.listen(process.env.PORT, process.env.IP, function(){
   console.log(" I am listening on some port");
 });
