const pool = require('./pool')

const createUserTable = ()=>{
    pool.query('CREATE TABLE  IF NOT EXISTS users ( id INT PRIMARY KEY AUTO_INCREMENT,email VARCHAR(255),password VARCHAR(255),uuid VARCHAR(255),name VARCHAR(255),photoUrl TEXT,instagram VARCHAR(255),facebook VARCHAR(255),about TEXT,emailVerify BOOLEAN DEFAULT 0)')
}
module.exports = {createUserTable}