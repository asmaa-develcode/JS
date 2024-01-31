const number = 15;

const promiseWtv= new Promise((resolve,reject)=>{

    if(number>10){
        resolve(number);

    }else {
        reject(number);
    }
} 

); 

promiseWtv
.then((val)=>console.log(val))
.catch((err)=>console.err(err));






