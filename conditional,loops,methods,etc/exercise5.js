const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  // Modify the property `firstName` of the `person2` in "Simon".

  person2.firstName='Simon';

  console.log(person1);
  console.log(person2);

  //Once we modify the property 'firstName' in person2, the property in person1 changes too, this is due to when 
  //creating the const person2 , we are not ACTUALLY creating a new object , instead we are just making a reference
  //to the first object (person1). Therefore any change we make on person2 is just gonna update/change 
  //person1 which is the original object in this case.

 