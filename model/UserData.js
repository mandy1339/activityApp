exports.getUserData = function(connection, req, res) {
    

    var query1 = `SELECT * FROM webuser`;
    connection.query(query1, function (error, rows, fields) {
        if (error) throw error;
        
        // console.log('The solution is: ', rows[0].solution);
        // console.dir(rows);
        res.json(rows);
      });
}