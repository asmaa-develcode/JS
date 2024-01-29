function repeatHello(callback){
    let intervalo= setInterval(()=>{
         console.log("Hello");
     },1000);
     setTimeout(()=>{
        clearInterval(intervalo); 
    }, 5000);
 }
 repeatHello();