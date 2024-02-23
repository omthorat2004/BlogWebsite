const pool = require('../db/pool')

const follow = (req,res)=>{
    const {id} = req.params
    const {followerId} = req.body
    try{
        pool.query('INSERT INTO followersRelation (follower_id,following_id) VALUES (?,?)',[followerId,id],(err,result)=>{
            if (err) throw err
            
            return res.status(201).json({success:true,message:'Followed successfully!'})
        })

    }catch(err){
        console.error(err)
        return res.status(500).json({message:'Unexpected error occurred!',success:false})
    }
}

const unFollow = (req,res)=>{
    const {id} = req.params
    const {followerId} = req.body
    try{
        pool.query('DELETE FROM followersRelation WHERE follower_id=? AND following_id=?',[followerId,id],(err,result)=>{
            return res.status(200).json({message:'Unfollowed Successfully!',success:true})
        })
    }catch(err){
        console.error(err)
        return res.status(500).json({message:'Unexpected error occurred!',success:false})
    }
}

module.exports={follow,unFollow}