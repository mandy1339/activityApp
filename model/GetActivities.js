module.exports(
    function (connection, req, res) {
        
        theQuery = `SELECT * FROM activity;`;

        connection.query(theQuery, function(error, rows, columns) {
            if(error) throw error;
            res.json(rows);
        });
    }
)


// .query(sqlString, values, callback)
// connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
//     // error will be an Error if one occurred during the query
//     // results will contain the results of the query
//     // fields will contain information about the returned results fields (if any)
//   });