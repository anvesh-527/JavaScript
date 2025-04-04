// Classes and Default Parameters.

// class 
class Human {
    age=20;
    walk() {
        console.log("I am walking");
    }
}
const obj = new Human();
console.log(obj.age);
// By default, all will be marled as public.

// Private --> cannot be accessed outside the class;

class Person {
    #name;  // Private variable
    constructor(name) {
        this.#name = name; 
    }
    getName() { // getters
        return this.#name;  // Accessible within the class
    }
    setName(name) {
        this.#name=name;
    }
}

let person = new Person("Anvesh");

console.log(person.getName());  // Output: Anvesh
// console.log(person.#name); 
// Error: Private field '#name' must be declared in an enclosing class

// this --> represents current object.

// Getters --> functions used to access the private variables
// Setters --> functions used to set the private variables


// Constructor
class Car {
    model;
    constructor(model) {
        this.model=model;
    }
}

const newCar = new Car("Tesla");
console.log(newCar.model);

// Default parameters
// --> Used when values are not provided

function sayName(name) {
    console.log("My name is",name);
}
// Not passed --> Undeined 

function sayName2(name="Anvesh") {
    console.log("My name is",name);
}
// Not passed --> Anvesh 
// Multiple default parameters are also possible.

function printName(fName="Anvesh",lName=fName.toUpperCase()) {
    console.log(fName,lName);
}

// printName("shiva","ganesh");
// printName("shiva");
// printName();

// Output:
// shiva ganesh
// shiva SHIVA
// Anvesh ANVESH

// Default parameter can be an object also
function solve(value = {age:20,section:"SI"}) {
    console.log("Hello",value);
}

// Default parameter can be an array also
function solve(value = ["anvesh","ramu"]) {
    console.log("Hello",value);
}

// null and undefined
function solve(value = "anvesh") {
    console.log("Hello",value);
}

// solve();
// solve("anvi");
// solve(null);
// solve(undefined);

// Output:
// Hello anvesh
// Hello anvi
// Hello null
// Hello anvesh

// When null is passed it is stored as it is considered as a value
// When undefined is passed the default value is printed

// Default parameter can be an function also

function getAge() {
    return 18;
}
function utility(fName="anvesh",age=getAge()) {
    console.log(fName," ",age);
}

