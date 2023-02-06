var express = require('express');
var router = express.Router();
const user = require('../models/event_adaptor');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('use <localhost:3000/events/??? >  then parse body json to me');
});




module.exports = router;
