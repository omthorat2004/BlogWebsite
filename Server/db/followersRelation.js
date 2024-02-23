const pool = require('./pool')

const createFollowerRelationTable = ()=>{
    try{
        pool.query('CREATE TABLE IF NOT EXISTS followersRelation (id INT  PRIMARY KEY AUTO_INCREMENT , follower_id INT ,following_id INT)')

    }catch(err){
        console.error(err)
    }
}

module.exports = {createFollowerRelationTable}