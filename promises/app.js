const promise=new Promise((resolve,reject)=>{
    let bool=false
    if(bool)
    {
        resolve("true")
    }
    else if(!bool){
        reject("false")
    }
})

promise.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.error(err)
})