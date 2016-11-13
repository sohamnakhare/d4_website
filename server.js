var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var publicPath = __dirname + '/public/';

app.use(express.static(publicPath));

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

app.use("/", router);

app.use("*", function (req, res) {
    res.sendFile(path + "404.html");
});


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
app.listen(server_port,server_ip_address, function () {
    console.log("Live at Port " + server_port);
});