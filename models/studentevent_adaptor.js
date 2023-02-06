const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/event_alerter';
mongoose.connect(url);

// ตรวจสอบการเชื่อมต่อ
const db = mongoose.connection;
db.once('open', () => {
    console.log('students adaptor connect :', url);
})

db.on('error', (err) => {
    console.error('connection error T_T :', err);
})

const eventSchema = new mongoose.Schema({//collection record ของนักศึกษา... ทำกิจกรรม... เเล้ว เพื่อให้ง่ายต่อการ searching
    stdid:String,
    eventid:String,
    create_time: { type: Date, default: Date().toLocaleString("th-TH") }
})

module.exports = mongoose.model('event', eventSchema);
//ตัวสร้าง schema ไว้เชื่อต่อ database
