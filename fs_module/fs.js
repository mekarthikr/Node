const fs=require('fs')

fs.readFile('read.txt','utf-8',(err,data)=>{
console.log(data)
fs.writeFile('writefile.txt',data,()=>{     //cretates the file
    fs.readFile('writefile.txt','utf-8',(err,data)=>{
        console.log(data)
        fs.unlinkSync('writefile.txt')//deletes the file
    })
})
})

// console.log("test")