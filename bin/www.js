"use strict"

const app = require("../back") //상위폴더로 간다음 불러와야해 //보내줘야 받지

const PORT = 3000;
app.listen(PORT, () =>{
    console.log("서버 가동합니다");
});