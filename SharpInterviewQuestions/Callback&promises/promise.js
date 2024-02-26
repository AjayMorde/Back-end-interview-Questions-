// function x(callback){
//     setTimeout(()=>{
//         console.log('i am x')
//         callback()
//     },4000)
// }
// function y(callback){
//     setTimeout(()=>{
//         console.log('i am y')
//         callback()
//     },1000)
// }
// function z(callback){
//     setTimeout(()=>{
//         console.log('i am z')
//         callback()
//     },1000)
// }


// x(()=>{
//     y(()=>{
//         z(()=>{
//             console.log('finish')
//         })
//     })
// })


function x(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('i am x')
            let b=a*a
            resolve(b)
        },7000)
    })
}


function y(b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('i am y')
            console.log(b)
            let c=b*b
            resolve(c)
            console.log(b)
        },5000)
    })
}


function z(c){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('i am z')
            console.log(c)
            let d=c*c;
            resolve(d)
        },5000)
    })
}

let a=2

x(a).then((b)=>{
    return y(b)
})
.then((c)=>
{
    return z(c)})
.catch((err)=>console.log(err))