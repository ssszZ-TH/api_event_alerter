const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/event_alerter';
mongoose.connect(url);

// ตรวจสอบการเชื่อมต่อ
const db = mongoose.connection;
db.once('open', () => {
    console.log('student adaptor connect :', url);
})

db.on('error', (err) => {
    console.error('connection error T_T :', err);
})

const studentSchema = new mongoose.Schema({
    studentid: { type: String, lowercase: true, trim: true, required: true },
    username: { type: String, lowercase: true, trim: true, required: true },
    password: { type: String, lowercase: true, trim: true, required: true },
    firstname: { type: String, lowercase: true, trim: true, required: true },
    lastname: { type: String, lowercase: true, trim: true, required: true },
    faculty: { type: String, lowercase: true, trim: true, required: true },//สาขาวิชา
    cdtigen: { type: Number, required: true },//รุ่น
    profileurl:{type: String, default:"https://cdn-icons-png.flaticon.com/512/201/201818.png"},//รูปนักเรียน default
    create_time: { type: String, default: Date().toLocaleString("th-TH") }
})

module.exports = mongoose.model('student', studentSchema);
//ตัวสร้าง schema ไว้เชื่อต่อ database
