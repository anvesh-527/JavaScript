// Function call stack and hoisting


// hoisting --> The process in which the variable,functions are shifted
//  to their top of the scope.
{
// FUnction is hoisted here(Top of the scope).

const arr=[1,2,3,4,5];
let ans = getSum(arr);
console.log(ans);
function getSum(arr) {
  return arr.reduce((acc,curr)=> {
    return acc+curr;
  });
}

}

// If we use **function expression** to declare the function 
// it will give us an reference error
sayHello();
let sayHello = function() {
    console.log("Hello World!!!"); 
}
// Cannot access 'sayHello' before initialization

// If we use var instead of let it will be hoisted. 

// Variable Hosisting 

{
// Only the declaration gets hoisted(not the initialization)
console.log(a); // (Undefined)
var a = 10;
}

// Class level hoisting --> not possible
const obj1 = new Human();
class Human {

} // Throws an error


// Function call stack (Just like Recursion call stack)


// Why are functions called as first class citizens ?
// 1.  assign to a variable ---> simple 
// 2. as argument 
function greetMe(greet,fullName) { //2
    console.log("Hello",fullName);
    greet();
}

function greet() { //1
    console.log("Greeting for the day");
}
// 3. return a function

function solve(num) {
    return function(num) {
        return num*num;
    }
} let ans = solve(5);
console.log(ans); // Ans contains only a function
/*
ans contains
function(num) {
return num*num;
}
*/
let finalAns = ans(10);
console.log(finalAns);
// The op is 100

// 4. use function as a Data structure

const arr = [
    function(a,b) {
        return a+b;
    },
    function(a,b) {
        return a*b;
    },
    function(a,b) {
        return a-b;
    }
];
let second = arr[1];
console.log(second(2,5));

// 5. use as a property(in object)

let obj3 =  {
    age:21,
    fullname:"anvesh",
    greet :()=>{
        console.log("Welcome!!");
    }
}
obj3.greet(); 
// Output:
// Welcome!!

