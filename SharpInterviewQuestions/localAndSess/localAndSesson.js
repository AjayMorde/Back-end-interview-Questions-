let a={
    name:"ajay",
    age:25
}
let jsonString=JSON.stringify(a);
console.log(jsonString)
localStorage.setItem("userData", jsonString);
