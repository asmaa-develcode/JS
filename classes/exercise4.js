class Person {
    constructor(firstName,lastName,age){
        this._firstName=firstName;
        this._lastName=lastName;
        this._age=age               //he leído en https://linuxhint.com/getters-and-setters-in-javascript-class/
                                   //que ahora se debe poner ._ para no crear conflicto con los getters y
                                   //setters
    }
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }

    set firstName(newFirstName){
        this._firstName=newFirstName;
    }

    set lastName(newLastName){
        this._lastName=newLastName;
    }

    set age(newAge){
        this._age=newAge;
    }

    get fullName(){
        return  `${this._firstName} ${this._lastName}`;
    }

    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person.firstName = 'Maria';
    person.lastName = 'Verdi';
    console.log(person.fullName);