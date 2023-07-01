//? In JavaScript to handle an exception use 4 terms they are:
//? 1) try 2) catch 3) throw 4) finally 

let x = 0, y = 10

try{
    if(x==0) throw "You can't to divide zero by any number"
    if(y==0) throw "You can't to divide any number by zero"
    let result = x/y
    console.log(result)
}catch(err){
    console.log(err)
}finally{
    console.log("You successfully handle your error or exception!!!!")
}