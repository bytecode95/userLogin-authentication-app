var connection = require('../db/db-connection');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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


const userLogin = async(req, res)=>{
    const {username, password} = req.body;
    connection.query('select * from usersignup where username=?;',[username],(err, result)=>{
        console.log(result)
        if(!result.length){
            res.json({Error:"User doesn't exist please sign up first!"})
            return;
        }
        bcrypt.compare(password, result[0].password).then(async(match)=>{
            if(!match){
                res.json({Error:"Wrong username and password!"})
            }else{
                const token = jwt.sign({username:result[0].username, id:result[0].user_id}, "jwt")
                console.log(token)
            }
        })

    })
}

module.exports = {userSignUp, userLogin};