const promise=new Promise((resolve,reject)=>{
    let bool=true
    if(bool)
    {
        resolve("true")
    }
    else if(!bool){
        reject("false")
    }
})

const return_promise= async()=>{
    setTimeout(()=>{
        console.log("returned")
    return Promise.resolve("hello") },5000)
}

promise
. then(()=>{return_promise()})
.then((data)=>{
    console.log(data+" promis")
})
.catch((err)=>{
    console.error(err)
})