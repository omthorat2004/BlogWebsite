const pool = require('./pool')

const createEmailVerificationTable = ()=>{
    try{
        pool.query("CREATE TABLE IF NOT EXISTS EmailVerification (id INT PRIMARY KEY AUTO_INCREMENT,email VARCHAR(255),verelloificationCode INT,messageId INT)")
        // console.log("H")
    }catch(err){
        console.error(err)
    }
}

module.exports = {createEmailVerificationTable}