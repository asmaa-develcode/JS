function isAdult({age}) {            //modifico  el parameter "person" por "age" ya que hará más fácil
    return age >= 18;               //el age checking.
  }
  
  const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  };
  
  console.log(isAdult(person));
  