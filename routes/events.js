var express = require('express');
var router = express.Router();
const events = require('../models/events_adaptor');//ใช้ในการ crud collection นั้นๆ

/* GET users listing. */
//localhost:3000/event/
router.get('/', function (req, res, next) {
    res.send('use <localhost:3000/events/??? >  then parse body json to me');
});

//localhost:3000/event/all
router.get('/all', (req, res, next) => {
    events.find({}, (err, post) => { //err คือ state ไว้เขียน code ดัก post คือข้อมูลจาก mongo
        if (err) {
            console.log("canot get all data from event");
            return res.send("canot get all data from event");
        }
        res.json(post);
        console.log("all event has been get");
    });
});

// localhost:3000/create then parse {schema}
router.post('/create', (req, res, next) => {
    events.create(req.body, (err,post)=>{
        if (err){
            console.log("cannot create event");
            return res.send("cannot create event")
        }
        res.json(post);
        console.log("new event is created");
    });
});

module.exports = router;
