const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/event_alerter';
mongoose.connect(url);

// ตรวจสอบการเชื่อมต่อ
const db = mongoose.connection;
db.once('open', () => {
    console.log('events adaptor connect :', url);
});

db.on('error', (err) => {
    console.error('connection error T_T :', err);
});

all_faculty=["cpe","ddt"];

const eventSchema = new mongoose.Schema({
    eventid: String,//ปีคศ-event 23-001 มาตระฐานค่อยว่ากันทีหลัง
    eventname:String,
    description:String,
    reqfaculty:{type: Array, default:all_faculty},
    reqcdtigen:{type: Array},
    starttime:{
        day:Number,
        month:Number,
        year:Number,
        hour:Number,
        min:Number,
    },
    create_time: { type: Date, default: Date().toLocaleString("th-TH") }
})

module.exports = mongoose.model('event', eventSchema);
//ตัวสร้าง schema ไว้เชื่อต่อ database
