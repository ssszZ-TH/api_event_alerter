var express = require('express');
var router = express.Router();
const events = require('../models/events_adaptor');//ใช้ในการ crud collection นั้นๆ

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('use <localhost:3000/events/??? >  then parse body json to me');
});

module.exports = router;
