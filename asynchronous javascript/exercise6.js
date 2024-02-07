const isLogged = true;

const firstPromise= new Promise((resolve,reject)=>{
    if(isLogged){
        resolve(Math.random()); 
    }
    else{
        reject("Error");
    }
}
)

const secondPromise=(num)=>{
    new Promise=((resolve,reject)=>{
        if(num>0.5){
            resolve({name: "John", age: 24});
        } else{
            reject("Error");
        }
    }
    )
}

firstPromise
.then((randomNumber)=>secondPromise(randomNumber))
.then((finalObject)=>{
    console.log({name: "John", age: 24});
}
)
.catch((error)=>{
    console.error(error);
}
)
.finally(()=>{
    console.log("FIN");
});

