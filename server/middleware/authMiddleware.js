const jwt = require('jsonwebtoken');

function verifyToken(req, res, next){
    if(!token){
        return res.status(401).json({message:'Token is not provided!'})
    }
    jwt.verify(token, 'jwt',(err, jwt, decoded)=>{
        if(err){
            return res.status(401).json({message:"Token Invalid!"});
        }
        req.username = decoded.username;
        req.userID = decoded.id;
        next();
    })
}

module.exports = {verifyToken};