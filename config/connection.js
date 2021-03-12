const mysql = require( 'mysql' )

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        /*! please fill in your password; then create the database name below and create the table */
        password: "Winter2021",
        database: "burgers_db"
    })
}

connection.connect(err => {
    if(err) throw err;
})

module.exports = connection