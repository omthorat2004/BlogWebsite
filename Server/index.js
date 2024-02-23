if(process.env.NODE_ENV!='production'){
    require('dotenv').config()
}
const PORT = process.env.PORT
const express = require('express')
const cors = require('cors')
const {createUserTable} = require('./db/userTable')
const {createEmailVerificationTable} = require('./db/emailVerificationTable')
const {createFollowerRelationTable} = require('./db/followersRelation')
const app = express()

const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')

function customHeaders(req,res,next){
    app.disable('x-powered-by')
    res.setHeader('X-Powered-By','Blog App')
    next()
}
app.use(express.json())
app.use(cors())
app.use(customHeaders)
app.use('/',authRouter)
app.use('/',userRouter)
// createUserTable()
// createEmailVerificationTable()
// createFollowerRelationTable()


 
app.listen(PORT,()=>{
    console.log("j")
    console.log(process.env.PORT);
})
