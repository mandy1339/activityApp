////////////////////////////////////////////////////////////
//getActivityData()
exports.getActivityData = function(connection, req, res) {
        
    var query1 = `SELECT * FROM activity;`;
    var buildResponse = {
        success: '',
        numRows: 0,
        data: []
    };

    connection.query(query1, function(error, rows, columns) {
        if(error) throw error;
        buildResponse.success = true;
        buildResponse.numRows = rows.length,
        buildResponse.data    = rows;
        res.json(buildResponse);
    });
};
//getActivityData()
////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////
//addActivity()
exports.addActivity = function(connection, req, res) {

    if(req.body == null){
        res.json({success: false, errorMessage:"could not parse the body of the request"});
        return;
    }
    var query1 = 'CALL activityappdb.add_activity(';
    var query3 = ');'
    var buildResponse = {
        success: true,
        responseMessage: 'Procedure probably successful',
        data: null
    };
    var query2 = `'${req.body.name}',` + ` '${req.body.date}',` + ` '${req.body.description}',`
                + ` ${req.body.longdist},` + ` ${req.body.indoor},` + ` ${req.body.inhouse},` + ` ${req.body.daytime}`;

    var fullQuery = query1 + query2 + query3;


    connection.query(fullQuery, function(error, results, fields) {
        if(error) {res.json({success: false, errorMessage: error.message})};
        // You can include an errors field in the response object
        // like this: res.json({ ... , errors: {{name: 'ugly name'}}, ... }

       buildResponse.data = results;
       res.json(buildResponse);
       
    });
};
//addActivity()
////////////////////////////////////////////////////////////



//delActivity()
////////////////////////////////////////////////////////////
exports.delActivity = function(connection, req, res) {
    if(req.body == null) {
        res.json({success: false, errorMessage: 'activityid not received'});
        return;
    }
    var buildResponse = {
        data: null,
        success: true,
    };
    var query1 = `CALL activityappdb.del_activity(${req.body.activityid});`;
    connection.query(query1, function(error, results, fields) {

        if(error) {res.json({success: false, errorMessage: error.message})}
        buildResponse.data = results;
        res.json(buildResponse);
    });
};
////////////////////////////////////////////////////////////
//delActivity()






// HOW TO ESCAPE THE QUERY STRINGS:
// .query(sqlString, values, callback)
// connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
//     // error will be an Error if one occurred during the query
//     // results will contain the results of the query
//     // fields will contain information about the returned results fields (if any)
//   });



 /* RESULTS OF A PROCEDURE CALL:
  results will be an array like this now:
        [{
            table1_fieldA: '...',
            table1_fieldB: '...',
            table2_fieldA: '...',
            table2_fieldB: '...',
        }, ...]
*/