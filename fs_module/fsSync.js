const fs=require('fs')

//blocking

let read=fs.readFile('read.txt','utf-8')   
console.log(read)

fs.writeFileSync('write.txt',read+" from write")
let write=fs.readFileSync('write.txt','utf-8')
console.log(write)