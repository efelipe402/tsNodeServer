"use strict";
exports.__esModule = true;
var http = require("http");
var app_1 = require("./app");
var port = process.env.PORT || 3000;
var server = http.createServer(app_1.app);
server.listen(port);
