let a="Ajay-vijay"
let b=a.replace(/-/g," & ");
console.log(b)


// reverse string;
let c="india";
let d=" ";
for(let i=c.length-1;i>=0;i--){
    d=d+c[i];
 
}
console.log(d)


// 6. Let arr=[7,8,9,10]

// Write a function to check if the given number "n" exists in the array.

// If present remove the number from the array , return the remaining array excluding the number else print element not present.

let e=[2,3,4,5]

let f=7;
let g=[]
for(let i=0;i<e.length;i++){
    let ele=e[i];
    if(ele!==f){
        g.push(ele)

    }
}
console.log(g)


async function fun1(){

    console.log('a');
    
    console.log('b');
    
    await setTimeout(() => console.log('c'), 1000)
    
    await setTimeout(() => console.log('d'), 0)
    
    console.log('e');
    
    }
    
    fun1()