const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/user';
mongoose.connect(url);

// ตรวจสอบการเชื่อมต่อ
const db = mongoose.connection;
db.once('open', ()=>{
    console.log('DB connected ^_^ :', url);
})

db.on('error', (err)=>{
    console.error('connection error T_T :', err);
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    joined_event: [], // เก็บชื่อกิจกรรมที่ทำเรียงๆ กันเป็น list
    create_time: { type: Date, default: Date.now } 
})

module.exports = mongoose.model('user', userSchema);
//ตัวสร้าง schema ไว้เชื่อต่อ database
