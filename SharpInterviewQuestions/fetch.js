// const url='https://dummyjson.com/products/1'
// async function getData(){
//    const res =await fetch(url);
//    const data =await res.json();
//    console.log(data)
// }
// getData()

fetch('https://dummyjson.com/products/1')
.then((res)=>{
    const data =res.json();
    console.log(data)

}).catch((err)=>{
    console.log(err)
})

