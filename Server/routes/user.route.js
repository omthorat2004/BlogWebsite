const { getUsers } = require('../controller/user.controller')
const {follow,unFollow} = require('../controller/profile.controller')

const pool = require('../db/pool')

const router = require('express').Router()

router.get('/users',getUsers)

router.post('/follow/:id',follow);

router.post('/unfollow/:id',unFollow)

router.get('/server-status',(req,res)=>{
    res.json(({message:'Server started'}))
})

router.post('/', (req, res) => {
    const { id } = req.body;
    console.log(req.body)
    try {
        pool.query('SELECT users.id,email,password,follower_id,following_id FROM users LEFT JOIN followersRelation fr ON fr.follower_id=? AND fr.following_id=users.id', [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Database error occurred!' }); // Corrected status code
            }
            return res.json({ result });
        });
    } catch (err) {
        console.error(err);
        return res.status(501).json({ message: 'Unexpected error occurred!' });
    }
});

module.exports = router