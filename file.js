const fs=require("fs");

// fs.writeFileSync("./text.txt","hello  world")
// const res=fs.readFileSync("./text.txt","utf-8");
// console.log('res: ', res);
fs.readFile("./text.txt","utf-8",(err,res)=>{
    if(err){
        console.log("error");
    }else{
        console.log(res);
    }
})