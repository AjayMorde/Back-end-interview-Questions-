const cart=['kurta','shirts', 'pants'];

createOrder(cart)
.then((orderID)=>{
    console.log(orderID)
    return orderID
}).then((orderID)=>{
    return processingPayment(orderID)

}).then(()=>{
    return processInfo()
}).then(()=>{
    console.log('payment succesfull')

}).catch((err)=>{
    console.log(err)
})


function cartValid(){
    return true
}

function createOrder(){
return new Promise(function(resolve,reject){
        if(!cartValid()){
            const er=new Error("cart is not valid");
            reject(er)
        }

        const id=1;
        if(id){
            setTimeout(()=>{
                resolve(id)
            },3000)
        }

    })
    
}

function  processingPayment(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`payemt of user ${id} checking`)
            resolve();
        },3000)
    })
}

function processInfo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          
            resolve();
        },7000)
    })
}


y=3
console.log(y)