const mysql = require('mysql');

var config = {
    host: 'localhost',
    user: 'kruztw',
    password: 'flag{kruzkruz}',
    database: 'user_db',
    port: 3306,
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) {
    if (err) {
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
    }
});

function createTable() {
    conn.query("create table if not exists users(" +
                    "id serial PRIMARY KEY," +
                    "account VARCHAR(20)," +
                    "password VARCHAR(20)" +
               ");",
               function(err, results, fields) {
                   if (err)
                       throw err;
               });
}

module.exports = {
    conn: conn,
    createTable: createTable,
};

