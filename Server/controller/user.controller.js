const pool = require('../db/pool')

const getUsers = (req,res)=>{
    console.log("getUsers")
    // console.log(req.headers)
    let id = req.headers.userid
    id=Number(id)
    console.log(id)
    try{
        if(!id){
            pool.query('SELECT id,email,emailVerify,name,about,instagram,facebook,instagram,photoUrl FROM users',(err,result)=>{
                if (err) throw (err.message)
                return res.status(200).json({users:result})
            })
            return res.status(200).json
        }
        pool.query('SELECT users.id,email,emailVerify,name,about,instagram,facebook,photoUrl,follower_id,following_id FROM users LEFT JOIN followersRelation fr ON fr.follower_id=? AND fr.following_id=users.id',[id],(err,result)=>{
            if (err) throw err
            return res.status(200).json({users:result})
        })
    }catch(err){
        console.error(err)
        return res.status(500).json({message:"Some unexpected error occurred!"})
    }
}

module.exports={getUsers}