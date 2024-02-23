const {isValidEmail} = require('../../utils/valid')
require('dotenv').config()
const nodemailer = require('nodemailer')
const verifyHtml = require('../../utils/emailTemplates')
const pool = require('../../db/pool')
const verifyEmailFormat = (req,res,next)=>{
    const {email} = req.body
    const valid = isValidEmail(email)
        if(!valid){
            return res.status(403).json({message:'Email is not in valid format'})
        }
        next()
}

const CLIENT_URL = process.env.FRONTEND_URL

const sendVerificationEmail = async(req,res)=>{
    const verificationCode = Math.floor(10000 + Math.random() * 90000);
    const {name,email} = req.body
    const verificationLink = `${CLIENT_URL}/verify-email?email=${email}`;
    try{
        const transport = nodemailer.createTransport({
            service:'Gmail',
            auth:{
                user:'omthorat1005@gmail.com',
                pass:'lfcq zeyq iuyz figl'
            }
        })
        const info = await transport.sendMail({
            from:'BlogBoom',
            to:email,
            subject:'Email verification',
            html:verifyHtml(name,verificationLink,verificationCode)
        })
        console.log(info)
        pool.query('DELETE FROM EmailVerification WHERE email=? ',[email],(err,result)=>{
            if (err) throw err
            console.log(result)
        })
        pool.query('INSERT INTO EmailVerification (email,verificationCode,messageId) VALUES (?,?,?)',[email,verificationCode,info.messageId],(err,result)=>{
            if (err) throw err
        })
        res.status(201).json({message:`Verification sent to email ${email}`})
    }catch(err){
        console.error(err)
        res.status(500).json({message:"Error while sending mail!"})
    }
}



module.exports = {verifyEmailFormat,sendVerificationEmail}