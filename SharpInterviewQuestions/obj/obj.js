// to find length of an object 
let obj={
a:"one",
b:"two",
c:"three",
d:"four"
}
var count=0;

for(let key in obj){

    
        count++;
    
}

console.log('length of obj is ',count)


// travers obj 
let arr=[]

for(let key in obj){
    let val=obj[key];
    // console.log(val)
    console.log(key + " : " +val)
   
    arr.push(val)
}
console.log(arr)

// change age from obj

const obj1={
    name:"ajay",
    age:24
}
for(let key in obj1){
    let  val=obj1[key];
    if(val===24){
       obj1[key]=25
    }
}
console.log(obj1)
console.log('-------------------------------------------------------------------------------------------------')

// Write a function to generate random number between 10 and 99?

// function generateRandomNumber() {
   
//     const randomNumber = Math.random();
    
    
//     const scaledNumber = Math.floor(randomNumber * 90) + 10;
    
//     return scaledNumber;
//   }
  
//   // Example usage
//   const randomNumber = generateRandomNumber();
//   console.log(randomNumber);
  console.log('---------------------------------------------------------------------------------------------------')


  let d=Math.random()
  let e=Math.floor(d*90)+10;
  console.log(e)
console.log("===============================================================================================================")

