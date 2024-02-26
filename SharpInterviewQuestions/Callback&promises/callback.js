function x(callback){
    setTimeout(()=>{
        console.log('i am x')
        callback()
    },4000)
}
function y(callback){
    setTimeout(()=>{
        console.log('i am y')
        callback()
    },1000)
}
function z(callback){
    setTimeout(()=>{
        console.log('i am z')
        callback()
    },1000)
}
x(()=>{
    y(()=>{
        z(()=>{
            console.log('finish')
        })
    })
})