const mysql = require('mysql2');


let connection;

function getConnection(){
    if(!connection){
       connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Vira@95714',
            database: 'user_management'
        })
    }
    return connection;
}


module.exports = getConnection();