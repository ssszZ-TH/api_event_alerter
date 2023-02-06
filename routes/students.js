var express = require('express');
var router = express.Router();
const user = require('../models/students_adaptor.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('use <localhost:3000/users/login>  then parse body json to me');
});

// /users/all  method get  must sent with bodyjason {token:ssszzสadmin}
// danger !!!!!!!!  นี่คือสิทธิของ admin
router.get('/all', (req, res, next) => {
    user.find({}, (err, post) => {
        if (err){
            console.log("canot get all data from student");
            return next(err);
        }
        if (req.body.token != "โkey") {
            console.log("unauthorize atemp to get all data !!!!!");
            return res.send("require key pass? to get all data");
        }
        res.json(post);
        console.log("all user data have been get");
    });

});


router.get('/login', (req, res, next) => {
    user.find({username:req.body.username, password:req.body.password}, (err, post) => {
        if (err) {
            console.log("cannot login");
            return next(err);
        }
        res.json(post);
    });
});

router.post('/create', (req, res, next) => {
    user.create(req.body, (err, post) => {
        if (err) {
            console.log("can not create user");
            return next(err);
        }
        res.json(post);
        console.log('new user create');//print check
        console.log(post);//print check
    });
});


module.exports = router;
