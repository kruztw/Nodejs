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


function dropTable(table) {
    conn.query(`drop table if exists ${table};`,
		function (err, results, fields) {
			if (err)
				throw err;
		});

	console.log("dropTable : succeess");
}

function createTable(table) {
    if (table === "users") {
	    conn.query("create table if not exists users(" +
    	                "uid INT NOT NULL AUTO_INCREMENT," +
        	            "username VARCHAR(20) NOT NULL," + 
            	        "password VARCHAR(20) NOT NULL," +
                        "visit INT NOT NULL default 0," +
						"avatar VARCHAR(50)  default ''," +
                	    "PRIMARY KEY (uid)" +
	               ");",
    	           function(err, results, fields) {
        	           if (err)
            	           throw err;
               	});
	}
	else if (table === "msg") {
		conn.query("create table if not exists msg(" +
						"uid INT NOT NULL," +
						"msg VARCHAR(100) NOT NULL," +
					");",
					function(err, results, fields) {
						if (err)
							throw err;
					});
	}

	console.log("createTable ? : succeess", [table]);
    return -1;
}


function createUser(username, password) {
    return new Promise( async (success, failed) => {
        console.log(`call createUser ${username}, ${password}`);
	    if (!username.match(/^[0-9a-zA-Z]{1,16}$/))
		    success("invalid username");
	    
    	if (!password.match(/^[0-9a-zA-Z]{6,16}$/))
	    	success("invalid password");
        
        let ret_val  = await getUser(username);
        if ( ret_val != "User not found") {
	        success("user already exists");
        }
        console.log("getUser ret_val: ", ret_val);

        conn.query("insert into users (username, password) values(?, ?);", [username, password],
	    	function (err, results, fields) {
                if (err)
    				throw err;
                success("ok");
            });
    });
}

async function createUserWrapper(username, password) {
    console.log("createUser: ", username, password);
    let ret_val = await createUser(username, password);
    return ret_val;
}

function removeUser(username, password) {
	if (!username.match(/^[0-9a-zA-Z]{1,16}$/))
        return;
	if (!password.match(/^[0-9a-zA-Z]{8, 16}$/))
        return;

    conn.query("delete from users where username = ? and password = ?;", [username, password],
		function (err, results, fields) {
            if (err)
				throw err;
        });
	
	console.log("removeUser : succeess");
}

function getUser(username) {
    return new Promise((success, failed) => {
        console.log("getUser: ", username);
	    if (!username.match(/^[0-9a-zA-Z]{1,16}$/))
            success("invalid username");

        conn.query("select * from users where username = ? ;", [username],
		    function (err, results, fields) {
                if (results.length)
                    success(`username: ${username} exists`)
                else
    			    success(`User not found`);
		    });
    });
}

async function getUserWrapper(username) {
    let ret_val = await getUser(username);
    return ret_val;
}

function authUser(username, password) {
    return new Promise((success, failed) => {
        console.log("getUser: ", username, password);
	    if (!username.match(/^[0-9a-zA-Z]{1,16}$/))
            success("invalid username");
        if (!password.match(/^[0-9a-zA-Z]{8,16}$/))
            success("invalid password");

        conn.query("select * from users where username = ? and password = ? ;", [username, password],
		    function (err, results, fields) {
                if (err)
                    failed("authUser: error");
                if (results.length)
			        success("Ok");
                else
                    success("No");
		    });
    });
}

async function authUserWrapper(username, password) {
    let ret_val = await authUser(username, password);
    return ret_val;
}


module.exports = { 
    dropTable: dropTable,
    createTable: createTable,
    createUser: createUserWrapper,
    authUser: authUserWrapper,
    removeUser: removeUser,
};
