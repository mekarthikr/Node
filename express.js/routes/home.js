const index=(req,res,next)=>{
res.send("res send")
next()
}

exports.index=index;