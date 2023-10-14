var connection = require('../db/db-connection');
const bcrypt = require('bcrypt')


const userSignUp = async(req, res)=>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        connection.query('insert into usersignup(username, email, password) values (?,?,?);', [req.body.username, req.body.email, hashedPassword], (err, result)=>{
            if(err) throw err
    
            res.status(200).json(result)
        })
    }catch(err){
        res.status(500).send(err)
    }
   
    
    
}

module.exports = {userSignUp};