var express             = require('express');
    mySqlConnection     = require('./server-db.js');
    userData            = require('./model/UserData.js');
    path                = require('path');
    // listOfTablesInDb    = require('./models/ListOfTablesInDB.js');
    // tableData           = require('./models/TableData.js')
    
var app                 = express();
var connection = mySqlConnection.createConnection();

// FOR WINDOWS FOLDER
var staticPath = __dirname + "/activityapp";
var OsSafeStaticPath = path.normalize(staticPath);
app.use(express.static(OsSafeStaticPath));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/activityapp/index.html');
});

app.get('/api/getuser.json', function (req, res) {
    res.set({'Content-Type': 'application/json'});
    res.sendFile(__dirname + '/api/UserInfo.json');
});

app.get('/api/user/userdata.json', function (req, res) {
    console.log("mysql get userdata");
    res.set({'Content-Type': 'application/json'});
    userData.getUserData(connection, req, res);
});

app.get('/api/activity/getactivities', function (req, res) {
    console.log("mysql get activites");
});

app.get('/api/user/userdatastatic.json', function(req, res) {
    res.set({'Content-Type': 'application/json'});
    res.sendFile(__dirname + '/api/UserDataStatic.json');
})


var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})