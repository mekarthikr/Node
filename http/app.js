const http =require('http')

let server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plane'});
    res.end("Hey Ninjas")
});

console.log(server)