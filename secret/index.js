var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');


// viewed at http://localhost:8080
app.use(express.static(__dirname + '/public'));


app.listen(3000, () => console.log('Server running on port 3000'))