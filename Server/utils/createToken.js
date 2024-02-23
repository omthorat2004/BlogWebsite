if(process.env.NODE_ENV!='production'){
    require('dotenv').config()
}
const jwt = require('jsonwebtoken')
const createToken = (id,uuid)=>{
        const token = jwt.sign({id,uuid},process.env.JWT_KEY,{
            expiresIn:'3d'
        })
        return token
}
module.exports = {createToken}