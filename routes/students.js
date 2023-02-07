var express = require('express');
var router = express.Router();
const students = require('../models/students_adaptor.js');

/* GET users listing. */
router.get('/', (req,res)=>{
    students.find(req.body, (err,post)=>{
        if(err){
            console.log("cannot get data from student");
            return res.send("cannot get data from student");
        }
        res.json(post);
        console.log("all student has been get");
    });
});

router.post('/',)

module.exports = router;
