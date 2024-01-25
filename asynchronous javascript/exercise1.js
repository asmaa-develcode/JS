function printAsyncName(printHello, name){
    setTimeout(()=>{
        printHello;
    },1000);

    setTimeout(()=>{
        let name='Asmaa';
        console.log(name);
    },2000);
}

printHello=()=>console.log('Hello');
printAsyncName(name,printHello())