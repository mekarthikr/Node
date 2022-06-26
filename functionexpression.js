function callFunction(sayHI)
{

    sayHI();
}
const sayHI=function(){
    console.log("Hi");
}

callFunction(sayHI);