const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit : 1000,
    host:'localhost',
    user:'root',
    password:'new_password',
    database:'BlogWebsite',
})
module.exports = pool