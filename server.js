var express = require('express');
var app = express();
app.use(express.static('public'));
// var request = require('request');
// var http = require('http');
// var bodyParser = require('body-parser')
// fs = require('fs');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

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

app.get('/microhouse', function(req, res){
  res.sendfile(__dirname + '/public/microhouse.html');
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

app.get('/japan', function(req, res){
  res.sendfile(__dirname + '/public/japan.html');
});

app.get('/61b', function(req, res){
  res.sendfile(__dirname + '/public/61broadway.html');
});

app.get('/gv', function(req, res){
  res.sendfile(__dirname + '/public/love.html');
});

app.get('/cabin', function(req, res){
  res.sendfile(__dirname + '/public/cabin.html');
});

app.get('/projects', function(req, res){
  res.sendfile(__dirname + '/public/projects.html');
});

app.get('/imagefromthefuture', function(req, res){
  res.sendfile(__dirname + '/public/workcurrent.html');
});
app.get('/resume', function(req, res){
  res.sendfile(__dirname + '/public/resume.html');
});
app.get('/resume_1', function(req, res){
  res.sendfile(__dirname + '/public/resume-new.html');
});


app.get('/reactapi', function(req, res){
  res.sendfile(__dirname + '/public/reactapi.html');
});

app.get('/imaginedfragments', function(req, res){
  res.sendfile(__dirname + '/public/imaginedfragments.html');
});

app.get('/nytimes', function(req, res){
    res.sendfile(__dirname + '/public/nytimes.html');
  });

app.get('/dthree', function(req, res){
  res.sendfile(__dirname + '/public/dthree.html');
  });

app.get('/dthreee', function(req, res){
  res.sendfile(__dirname + '/public/dthreee.html');
  });

app.get('/titanic', function(req, res){
  res.sendfile(__dirname + '/public/dthree-titanic.html');
  });

app.get('/tree1', function(req, res){
  res.sendfile(__dirname + '/public/dthree-tree-1.html');
  });

app.get('/tree', function(req, res){
  res.sendfile(__dirname + '/public/dthree-tree.html');
  });
app.get('/application', function(req, res){
    res.sendfile(__dirname + '/public/application.html');
    });

app.get('/game', function(req, res){
    res.sendfile(__dirname + '/public/game.html');
    });

app.get('/gamerandom', function(req, res){
    res.sendfile(__dirname + '/public/gameRandom.html');
    });

app.get('/gameai', function(req, res){
    res.sendfile(__dirname + '/public/gameAi.html');
    });

app.get('/post', function(req, res){
    res.sendfile(__dirname + '/public/post.html');
    });

app.get('/recursion', function(req, res){
  res.sendfile(__dirname + '/public/recursion.html');
  });

app.get('/productprototype', function(req, res){
  res.sendfile(__dirname + '/public/simulate.html');
  });

app.get('/new', function(req, res){
  res.sendfile(__dirname + '/public/new.html');
  });

app.get('/thoughts', function(req, res){
    res.sendfile(__dirname + '/public/thoughts.html');
  });

  app.get('/genesis', function(req, res){
      res.sendfile(__dirname + '/public/genesis.html');
    });

// app.listen(process.env.PORT, process.env.IP, function(){
//   console.log(" I am listening on some port");
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
