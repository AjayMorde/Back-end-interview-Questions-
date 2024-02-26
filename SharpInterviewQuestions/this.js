// "use strict"
// function fun(){
//     console.log('=================================>',this)
// }fun()

// console.log('--------------------------------------------------------------------------------')

// console.log(this)


const obj={
    a:3,
    x:function(){
        console.log(this)
    }
}


obj.x()
console.log(this.a)