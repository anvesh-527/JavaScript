// variable Scoping
//  --> global,function,block
//  -->var,let,const can be used to create variables

// Global scope 
var age = 20;
console.log(age);
{
    console.log(age);
}
if(true) {
    console.log(age);
}
// Accesible everywhere in the file
// let,const --> same

// Function scope
function sayHello() {
    var fname = "anvesh";
    console.log(fname);
}
console.log(fname); // Not accesible(same with let,const)
sayHello();

// Block scope

// Var is not block scope
console.log(hello); //Undefines
{
    var hello = "anvesh";
    console.log(hello); //anvesh
}
console.log(hello); // anvesh

// let,const only in the block scope.

// Temporal Dead Zone
// --> The area until the declaration of the varibale in the case of let,const.

console.log(marks);
console.log("Hello");
console.log("Dunia");
let marks = 100;
console.log(marks);

// In the above case the area from line 40-43 is called Temporal Daed Zone. 