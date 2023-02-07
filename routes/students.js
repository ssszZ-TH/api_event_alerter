var express = require('express');
var router = express.Router();
const students = require('../models/students_adaptor.js');

/* GET users listing. */
router.post('/', (req, res) => {
    students.create(req.body, (err, post) => {
        if (err) {
            console.log("cannot create student");
            return res.send("cannot create student");
        }
        res.json(post);
        console.log("student is created")
    });
});

router.get('/', (req, res) => {
    students.find(req.body, (err, post) => {
        if (err) {
            console.log("cannot get data from student");
            return res.send("cannot get data from student");
        }
        res.json(post);
        console.log("all student has been get");
    });
});

router.patch('/:id', (req, res) => {
    students.updateOne({ _id: req.params.id },req.body,(err, post)=>{
        if(err){
            console.log("cannot update student data");
            return res.send("cannot update student data");
        }
        res.json(post);
        console.log("student",req.params.id,"is updated");
    });
});

router.delete('/:id',(req,res)=>{
    students.deleteOne({_id:req.params.id},(err,post)=>{
        if(err){
            console.log("cannot delete student data");
            return res.send("cannot delete student data");
        }
        res.json(post);
        console.log("student",req.params.id,"is deleted");
    });
});

module.exports = router;
