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
    }



// .query(sqlString, values, callback)
// connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
//     // error will be an Error if one occurred during the query
//     // results will contain the results of the query
//     // fields will contain information about the returned results fields (if any)
//   });