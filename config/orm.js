const connection = require('./connection');

const orm = {
    selectAll: function(cb) {
        let statement = `
        SELECT *
        FROM burgers`

        connection.query(statement, (err, data) =>{
            if(err) throw err;
            cb(data)
        })
    },
    insertOne: function(newBurger, cb) {
        let statement = `
        INSERT INTO burgers (burger_name)
        VALUES (?)`

        connection.query(statement, [newBurger], (err, data)=> {
            if(err) throw err;
            cb(data)
        })
    },
    updateOne: function(burgerId, cb) {
        let statement = `
        UPDATE burgers
        SET devoured = true
        WHERE id = ?`

        connection.query(statement, [burgerId], (err, data) => {
            if(err) throw err;
            cb(data)
        })
    }
}

module.exports = orm