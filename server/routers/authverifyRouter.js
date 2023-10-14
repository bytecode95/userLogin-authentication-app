const express = require('express');
const router = express.Router();

const {verifyToken} = require('../middleware/authMiddleware');

router.get('/auth', verifyToken, async(req, res)=>{
    const username = req.username;
    const userId = req.userid;
    res.status(200).json(username, userId);
})