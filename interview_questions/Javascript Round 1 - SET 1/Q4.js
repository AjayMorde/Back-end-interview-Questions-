function print(a) {

    return new Promise(resolve => {
   
     setTimeout(() => {
   
      console.log(a);
   
      resolve();
   
     },2000);
   
    });
   
   }
   
   
   
   async function printMessages() {
   
    await print("a")
   
    console.log("b");
   
   }
   
   
   
   printMessages();
   
   