var express = require('express');
var router = express.Router();
const events = require('../models/events_adaptor');//ใช้ในการ crud collection นั้นๆ

/* GET users listing. */
//localhost:3000/event/

// localhost:3000/events then parse {schema}
router.post('/', (req, res,) => {
    events.create(req.body, (err, post) => {
        if (err) {
            console.log("cannot create event");
            return res.send("cannot create event")
        }
        res.json(post);
        console.log("new event is created");
    });
});

//localhost:3000/events
router.get('/', (req, res) => {
    events.find(req.body, (err, post) => { //err คือ state ไว้เขียน code ดัก post คือข้อมูลจาก mongo
        if (err) {
            console.log("canot get data from event");
            return res.send("canot get data from event");
        }
        res.json(post);
        console.log("all event has been get");
    });
});


router.patch('/:id', (req, res) => {
    //console.log(req.params.id);
    events.updateOne({_id:req.params.id},req.body, (err,post)=>{
        if (err){
            console.log("cannot update event");
            return res.send("cannot update event");
        }
        res.json(post);
        console.log("dataafter update",req.body);
        console.log("report from mongo",post);
    });
});

router.delete('/:id',(req,res)=>{
    events.remove({_id:req.params.id}, (err,post)=>{
        if (err){
            console.log("cannot delete event");
            return res.send("cannot delete event");
        }
        res.json(post);
        console.log(req.params.id,"has been deleted");
        console.log("report from mongo",post);
    });
});

module.exports = router;
