const index=(req,res,next)=>{
res.send("res send")
// console.log(next)
res.status(500).send('Something broke!')
next()
}

exports.index=index;