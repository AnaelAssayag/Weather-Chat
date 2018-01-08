var express = require('express');
// console.log(express);


var app = express();
app.listen(8000);

app.get('/', function(request, response){
    response.send("Hey, hello from the server!");
  });

app.use(express.static('public'));

app.use(express.static(__dirname + '/node_modules'));



