# วิธี run ต้องอยู่ใน route folder ที่มี readme.md อยู่
`$ DEBUG=myapp:* npm start` ใช้ในการเริ่ม server เเบบ debug mode

หรือ

run เเบบ ไม่รู้ว่ามันทำงานได้ไง

`$ node ./bin/www` 

`runfile www ที่อยู่ใน folder bin`

เเบบ deploy

`npm start`

คำสั่งที่ใช้ในการสร้าง skeleton code `$ npx express-generator`
> อ้างอิง https://expressjs.com/en/starter/generator.html

# คำเเนะนำ
- โปรเจคนี้เขียนด้วย ubantu 22.04.01 ไม่รู้ว่าจะไปใช้ใน window ได้ป่าวนะ
- เเนะนำให้ใช้ vscode ในการทำ มี intellisense มากมายช่วยเหลือ



<br>

# route ทั้งหมดใน api 

`localhost:3000/` หน้าต้อนรับ api

`localhost:3000/users/all`  พร้อมส่ง {token: "โkey"} เพื่อรับ user ทั้งหมด

`localhost:3000/users/login` พร้อมส่ง {username:? ,password:?}

`localhost:3000/users/create` พร้อมส่ง json มาใน body

    {
    studentid: String,
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    faculty: String, //สาขาวิชา
    cdtigen: Number, //รุ่น
    profileurl: String, //url ที่อยู่ของรูป
    }

-------------------


localhost:3000/event  (method post) add event ใหม่

ตัวอย่างในการ add event

    {
    "eventid": "all001",
    "eventname": "minfullness",
    "description": "ฝึกสติเพื่อ optimise การทำงาน",
    "reqcdtigen": [
    63,
    64,
    65
    ],
    "starttime": {
    "day": 7,
    "month": 2,
    "year": 2023,
    "hour": 9,
    "min": 30
    }
    }