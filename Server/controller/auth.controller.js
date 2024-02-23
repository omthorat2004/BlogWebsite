const pool  = require('../db/pool')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { createToken } = require('../utils/createToken')

require('dotenv').config()

const Sign = (req,res)=>{
    try{
   
        const {email,password,name,photoUrl,uuid} = req.body
        // console.log(req.body)
        pool.query("SELECT id FROM users WHERE email = ?",[email],async(err,result)=>{
            if(err) throw err
            if(result[0]){
                return  res.status(403).json({message:'User already exists'})
            }
            else{
                const hashPassword =await bcrypt.hash(password,10)
                console.log(hashPassword)
                pool.query("INSERT INTO users (email,password,name,photoUrl,uuid) values (?,?,?,?,?)",[email,hashPassword,name,photoUrl,uuid],(err,result)=>{
                    if (err) throw err
                    const token = createToken(result.insertId,uuid)
                    const {password,...rest} = req.body
                    return res.status(201).json({user:{...rest,id:result.insertId},token})
                })
                
            }
        })
    }catch(err){
        console.error(err)
        res.status(500).json({message:'Unexpected error occurred'})
    }
}

const Login = (req,res)=>{
    try{ 
 
        console.log(req.body)
        const {email,password} = req.body
        pool.query("SELECT * FROM users WHERE BINARY email = ?",[email],async(err,result)=>{
            if (err) throw err

            const authorised = await bcrypt.compare(password,result[0].password)
            if(authorised){
                const {id,uuid} = result[0]
                const token = createToken(id,uuid)
                const {password,...user} = result[0];
                return res.status(200).json({token,user})
            }else{
                return res.status(401).json({message:'Incorrect email or password'})
            }
        })
    }catch(err){
     console.error(err.message)
        res.status(500).json({message:'Unexpected error occurred'})
    }
}
const Register = (req,res)=>{
    try{
        const {facebook,instagram,about,email} = req.body
        console.log(req.body)
        pool.query("UPDATE users SET instagram=?,facebook=?,about=? WHERE email=? ",[instagram,facebook,about,email],(err,result)=>{
            if(err) throw err
            res.status(200).json({instagram,about,email,facebook})
        })
    }catch(err){
        return res.status(500).json({message:"Unexpected error occurred"})
    }

}

const userVerification = (req,res)=>{
    const token = req.headers.authorisation
    console.log(token)
    try{
        jwt.verify(token,process.env.JWT_KEY,(err,result)=>{
            if(err){
                console.log('Auth false')
                return res.status(403).json({auth:false})

            }
            return res.status(200).json({auth:true})
        })

    }catch(err){
        console.error(err)
        res.status(500).json({auth:false})
    }
}
const verifyEmail = (req,res)=>{
    const {email,code} = req.body;
    try{
        pool.query('SELECT * FROM users WHERE email = ? AND emailVerify=1',[email],(err,result)=>{
            if (err) throw err
            if(result[0]){
            return res.status(403).json({message:'Email is  already verified'})
            }
            pool.query('SELECT * FROM EmailVerification WHERE email=?',[email],(err,result)=>{
                if (err) throw err
                console.log(result)
                console.log(code)
                if(result[0]&&result[0].verificationCode==code){
                    pool.query('UPDATE users SET emailVerify=1 WHERE email=?',[email],(error,response)=>{
                        if(error) throw error
                        return res.status(200).json({message:'Email is verified'})
                    })
                    return;
                }
                return res.status(403).json({message:'Invalid code or link is expired '})
            })

        })
       


    }catch(err){
        console.error(err)
        res.status(500).json({message:'Unexpected error occurred'})
    }
}



module.exports = {Sign,Register,Login,userVerification,verifyEmail}