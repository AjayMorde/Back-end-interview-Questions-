let add=function (x){
    return function(y){
     return  function(z){
        return (x+y+z)
     }
    }
}
let ans=add(2)(3)(2);
console.log(ans)
