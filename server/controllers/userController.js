var connection = require('../db/db-connection');

const userSignUp = (req, res)=>{
    
    connection.query('insert into usersignup(username, email, password) values (?,?,?);', [req.body.username, req.body.email, req.body.password], (err, result)=>{
        if(err) throw err

        res.status(200).json(result)
    })
}

module.exports = {userSignUp};