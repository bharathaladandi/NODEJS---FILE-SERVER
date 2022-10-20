const http = require("http");
const fs = require("fs");

const file = fs.readFileSync("./text.txt",{encoding:"utf-8"});



app.listen(8080,()=>{
    console.log("started on: http://localhost:8080")
})