
//callBack function

function getUserData(callback){
    setTimeout(function (){
        const user= {name: "Mahitha", age: 25
    }
    callback(user)},3000)
}

getUserData(function (user)
{
    console.log("Name:", user.name)
    console.log("Age:", user.age)
})
