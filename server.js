var express             = require('express');
    mySqlConnection     = require('./server-db.js');
    userData            = require('./model/UserData.js');
    // listOfTablesInDb    = require('./models/ListOfTablesInDB.js');
    // tableData           = require('./models/TableData.js')
    
var app                 = express();
var connection = mySqlConnection.createConnection();


app.use(express.static(__dirname + "\\activityapp"));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/activityapp/index.html');
});

app.get('/api/getuser', function (req, res) {
    res.set({'Content-Type': 'application/json'});
    res.sendFile(__dirname + '/api/UserInfo.json');
});

app.get('/api/testdb', function (req, res) {
    // res.set({'Content-Type': 'application/json'});
    userData.getUserData(connection, req, res);
});


var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})