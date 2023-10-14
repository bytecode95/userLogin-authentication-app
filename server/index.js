const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//getRouters

const user = require('./routers/userRouter');
const verify = require('./routers/authverifyRouter')

app.use('/api', user);
app.use('api', verify);

app.listen(port, ()=>{
    console.log(`New app listening on port ${3000}`)
})

