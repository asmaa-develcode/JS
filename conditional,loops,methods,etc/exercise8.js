function multiplyByTwo(value) {
    
    
    function inner(){
        return value*2;
        
    }
    return inner;
  }

  const number= multiplyByTwo(4)();
  console.log(number);