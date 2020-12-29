const fs = require('fs');
const http = require('http');
const https = require('https');
var express = require('express');

const hostname = 'localhost';
const httpPort = 3000;
const httpsPort = 443;

const httpsOptions = {
    cert: fs.readFileSync('./ssl/csatsfsu_xyz.crt'),
    ca: fs.readFileSync('./ssl/csatsfsu_xyz.ca-bundle'),
    key: fs.readFileSync('./ssl/cs.key')
};

var app = express();
var path = require('path');

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

app.use((req, res, next) =>{
    if(req.protocol === 'http') {
        res.redirect(301, `https://${req.headers.host}${req.url}`);
      }
      next();
});

// viewed at http://localhost:8080
app.use(express.static(__dirname + '/public'));

httpServer.listen(httpPort, hostname);
httpsServer.listen(httpsPort, hostname)