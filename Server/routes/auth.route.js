if(process.env.NODE_ENV!='production'){
    require('dotenv').config()
}

const router = require('express').Router()

const {Sign,Register,Login,userVerification,verifyEmail} = require('../controller/auth.controller')
const {verifyEmailFormat,sendVerificationEmail} = require('../middleware/user/emailVerify')
const {validEmail} = require('../middleware/auth/validEmail')

router.post('/sign',verifyEmailFormat,Sign)

router.post('/login',verifyEmailFormat,validEmail,Login)

router.post('/email',sendVerificationEmail)

router.post('/verify',userVerification)

router.patch('/register',Register)

router.post('/verify-email',verifyEmail)


module.exports = router