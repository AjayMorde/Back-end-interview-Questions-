// Question 2 : what is output of this function

// function sample (){

// for (let i=0; i<=5;i++){

// setTimeout (() => Console.log(i), 1000 );

// }

// }





// Question 3 : what is output of this



// SetTimeout(()=>{

// Console.log("a");

// },2000)

// Console.log("b") ;



// Question 4: how can you print a first and b later with. You are not allowed to use any extra setTimeouts?

const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
       resolve('a')
    },2000)
})

async function promises(){
    const a=await p1;
    console.log(a);
    console.log("b")

    
}
promises();