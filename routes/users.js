const { request, json } = require('express');
var express = require('express');
var router = express.Router();
const user = require('../models/users_adaptor.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('use <localhost:3000/users/login>  then parse body json to me');
});

// /users/all  method get  must sent with bodyjason {token:ssszzสadmin}
// ถ้า deploy ต้องเอาออก
router.get('/all', (req, res, err)=>{
    if (err){
        console.log("can not get all user : internal server err");
        return next(err);
    }
    if (req.body.token == "ssszzสadmin"){
        user.find({},(err,post)=>{
            if (err){
                console.log("require token to get all data");
                return next(err);
            }
            res.json(post);
            console.log("all user data have been get");
        });
    }
});
////////////////////////////////////////////////////////////

router.get('/login',(req,res,next)=>{
    user.findOne(request.body,(err,post)=>{
        if (err){
            console.log("can not login : internal server err");
            return next(err);
        }
        if (json(post).length > 0){
            console.log(request.body); //print check
            console.log("logged in");//print check
            res.json({"success":true});
        }else{
            console.log(request.body);
            console.log("invalid username or password");
            res.json({"success":false});
        }
    });
});

router.post('/create', (req, res, next) => {
    user.create(req.body, (err,post)=>{
        if(err){
            console.log("can not create user");
            return next(err);
        }
        res.json(post);
        console.log('new user create');//print check
        console.log(post);//print check
    });
});


module.exports = router;
