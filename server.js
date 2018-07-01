var express             = require('express');
    mySqlConnection     = require('./server-db.js'),
    userDataService     = require('./api/UserDataService.js'),
    activityDataService = require('./api/ActivityDataService.js'),
    path                = require('path'),
    bodyParser          = require('body-parser'),
    multer              = require('multer'), // v1.0.5
    upload              = multer(); // for parsing multipart/form-data

    // listOfTablesInDb    = require('./models/ListOfTablesInDB.js');
    // tableData           = require('./models/TableData.js')

//EXPRESS AND MYSQL VARS    
var app                 = express();
var connection = mySqlConnection.createConnection();



//MIDDLEWARE
////////////////////////////////////

// FOR WINDOWS FOLDER
var staticPath = __dirname + "/activityapp";
var OsSafeStaticPath = path.normalize(staticPath);
app.use(express.static(OsSafeStaticPath));

// FOR PARSING REQUEST BODY
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//MIDDLEWARE
////////////////////////////////////



// SERVE ENTRY POINT FOR EXTJS
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/activityapp/index.html');
});



//////////////////////////////////
// API SERVICE
app.get('/api/user/getusers.json', function(req, res) {
    console.log("mysql get userdata");
    res.set({'Content-Type': 'application/json'});
    userDataService.getUserData(connection, req, res);
});

app.get('/api/activity/getactivities.json', function(req, res) {
    console.log("mysql get activites");
    res.set({'Content-Type': 'application/json'});
    activityDataService.getActivityData(connection, req, res);
});

app.post('/api/activity/addactivity.json', function(req, res) {
    console.log("mysql add activity");
    res.set({'Content-Type': 'application/json'});
    activityDataService.addActivity(connection, req, res);
});
// API SERVICE
//////////////////////////////////



////////////////////////
// STUBBED STATIC API DATA
app.get('/api/user/userdatastatic.json', function(req, res) {
    res.set({'Content-Type': 'application/json'});
    res.sendFile(__dirname + '/api/UserDataStatic.json');
});
app.get('/api/getuser.json', function(req, res) {
    res.set({'Content-Type': 'application/json'});
    res.sendFile(__dirname + '/api/UserInfo.json');
});
// STUBBED STATIC API DATA
////////////////////////



var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})