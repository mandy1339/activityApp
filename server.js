var express     = require('express');

var app         = express();


app.use(express.static(__dirname + "\\activityapp"))

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/activityapp/index.html');
});

app.get('/api/getuser', function (req, res) {
    res.set({'Content-Type': 'application/json'});
    res.sendFile(__dirname + '/api/UserInfo.json');
});

var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})