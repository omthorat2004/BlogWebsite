

const pool = require('../../db/pool')
const validEmail = (req,res,next)=>{
    const {email} = req.body;
    try{
        pool.query('SELECT * FROM users WHERE BINARY email=?',[email],(err,result)=>{
            if (err) throw err
            if(!result[0]){
                return res.status(403).json({message:'User not exist'})
            }
            else if(result[0].emailVerify!=1){
                
                return res.status(403).json({message:`Email is not verified ${result[0].name}` })
            }
            next();
        })

    }catch(err){
        console.error(err)
    }

}
module.exports = {validEmail}