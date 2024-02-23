require('dotenv').config()
const {verify} = require('jsonwebtoken')
const decodeToken = (token)=>{
    try{
        verify(token,process.env.JWT_KEY,(err,decode)=>{
            if(err) return null
            return decode
        })

    }catch(err){
        console.error(err)
    }

}