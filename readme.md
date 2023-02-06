# วิธี run ต้องอยู่ใน route folder ที่มี readme.md อยู่
`$ DEBUG=myapp:* npm start` ใช้ในการเริ่ม server เเบบ debug mode

หรือ

`$ node ./bin/www`  ใช้งานเเบบจริงๆ

เเบบง่ายๆ
`runfile www ที่อยู่ใน folder bin`

คำสั่งที่ใช้ในการสร้าง skeleton code `$ npx express-generator`
> อ้างอิง https://expressjs.com/en/starter/generator.html

# คำเเนะนำ
โปรเจคนี้เขียนด้วย ubantu 22.04.01 ไม่รู้ว่าจะไปใช้ใน window ได้ป่าวนะ

# route ทั้งหมดใน api 
`localhost:3000/users/all`  พร้อมส่ง {token: "โkey"} เพื่อรับ user ทั้งหมด

`localhost:3000/users/login` พร้อมส่ง {username:? ,password:?}

ทำตรงนี้ต่อ