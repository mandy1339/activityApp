exports.getUserData = function(connection, req, res) {

    var query1 = `SELECT * FROM webuser`;
    connection.query(query1, function (error, rows, fields) {
        if (error) throw error;
        
        var buildResponse = {
            success: true,
            numRows: rows.length,
            data: [],
        }
        buildResponse.data = rows;

        res.json(buildResponse);
      });
}