// Arrays and Objects

// Reference types ->Array,Object,Functions
// Why they are called reference types --> Created in heap memory referenced from stack (pointer).
// The pointer stored in stack doesn't contain the actual data.


// Objects --> Collection of key value pairs

let obj = {
    "full name" : "Anvesh", // need of double quotes for names with spaces
    age : 21,// no need of double quotes for names without spaces
    greet : function() {
        console.log("Namste dunia");
    }
}

// Shallow copy 
let obj10 = obj;
// obj10 also points obj object

// Shallow copy
// --> A shallow copy means that only the top-level properties of the object are copied. Nested objects still share references with the original object.
// Shallow copy can be performed in multiple ways.They are : 

// 1. Using Object.assign()
let obj1 = { name: "Anvesh", details: { age: 22, city: "Hyderabad" } };

let shallowCopy = Object.assign({}, obj1);
shallowCopy.details.city = "Bangalore";  // Modifies original object's nested property

console.log(obj1.details.city);  // "Bangalore" (original object changed)
console.log(shallowCopy.details.city);  // "Bangalore"

// 2. Using the Spread Operator (...)
let obj2 = { name: "Anvesh", details: { age: 22, city: "Hyderabad" } };

let shallowCopy2 = { ...obj2 };
shallowCopy2.details.city = "Bangalore";

console.log(obj2.details.city);  // "Bangalore" (original object changed)

// Still there are multiple ways to perform this 
// let anvi = Object.assign({},obj1); (Random example)

// Deep Copy 
// --> The newly created object wiil be pointed to the new reference.
// A deep copy creates an entirely new copy, including nested objects, ensuring no references are shared.
// Deep copy can be performed in multiple ways.They are : 

// 1. Using JSON.parse(JSON.stringify(obj))
let obj3 = { name: "Anvesh", details: { age: 22, city: "Hyderabad" } };

let deepCopy = JSON.parse(JSON.stringify(obj3));
deepCopy.details.city = "Bangalore";

console.log(obj3.details.city);  // "Hyderabad" (original remains unchanged)
console.log(deepCopy.details.city);  // "Bangalore"


// 2. Using Lodash's _.cloneDeep() (Best Deep Copy)
const _ = require("lodash");

let obj4 = { name: "Anvesh", details: { age: 22, city: "Hyderabad" } };

let deepCopy2 = _.cloneDeep(obj4);
deepCopy2.details.city = "Bangalore";

console.log(obj4.details.city);  // "Hyderabad" (original remains unchanged)
console.log(deepCopy2.details.city);  // "Bangalore"

// let anvi2 = _.cloneDeep(anvi);



// Arrays --> Collection of items (Homogeneous)

// Array can be created using array literal ([]) or array constructor Array()

// 1. array literal

let arr = ['anvesh',21,'cmr','si',true];
console.log(arr); 

// 2. Array Constructor 
let arr2 = new Array('anvesh',21,'cmr','si',true);

// Type of both are --> Object(***)

// Methods 

// 1. Push --> adds at last
arr.push("lingi");

// 2. pop --> removes at last 
arr.pop();

// 3. shift --> removes from first
arr.shift();

// 4. unshift --> adds an element at first
arr.unshift("Anvesh");

// 5. slice --> part of an array (Shallow Copy takes place)
console.log(arr.slice(2,4)); //Start from 2 end at 4 (exclude 4)

// 6. splice --> Change content,insert,replace,remove
let newArr = ['anvesh',21,'cmr','si',true];

newArr.splice(1,2,'it'); // Start at index 1 remove 2 elements from there and the add 'it' their.

// Just add kunal at position 1 
newArr.splice(1,0,'kunal');

// Delete an element at a position (index -> 1)
newArr.splice(1,1);

// replace the element at index 0
newArr.splice(0,1,"Anvesh Komuravelli");

// Replace cmr at index 2 with cmrit
newArr.splice(2,1,"cmrit");

// 7. map --> apply the same logic over all the elements of the array
let numbers = [10,60,70];
let squareArr = numbers.map((num)=> {
    return num*num;
})
// Output --> [100, 3600, 4900]

// Using map we can access the indices also
numbers.map((num,idx)=> {
    console.log(num+idx);
});
// Names (num,idx) can be anything

// 8. Filter --> Divide them based on a condition 

let nums = [1,2,3,4,5,6,7,8,9,10];
let evenArr = nums.filter((number)=>{
    if(number%2===0) {
        return true;
    } else {
        return false;
    }
});
// evenArr --> contains [2, 4, 6, 8, 10]
// Can be directly return as 
// let evenArr = nums.filter(number => number % 2 === 0);

// Filter out the strings from an array
let heteroArr = [1,2,'anvesh','ramu',null];
let strArr  = heteroArr.filter((value)=>{
    // if(typeof(value)==='string') {
    //     return true;
    // } else {
    //     return false;
    // }
    return (typeof(value))==='string';
});
// Output --> ["anvesh", "ramu"]

// 9. Reduce --> Used when we need a single value as output.
// The reduce() method in JavaScript executes a provided function for each element of an array, 
// resulting in a single output value. It's a powerful tool for summarizing, transforming, 
// and manipulating data within arrays

// There are 2 variables --> accumulator,current Value.
// accumulator --> We can initialize if we want .
// If we initialized --> current value takes the first element
// else --> accumulator takes the first element and 
// the current value takes the second element

let numArr = [10,20,30,40];
let sum = numArr.reduce((acc,curr)=>{
    return acc+curr;
});
console.log(sum);
// Output --> 100
// The parameters passed are called as callBack Function,Initial Value.

// 10. sort --> 
arr.sort(); // --> Sorts them in ascending order.

numbers.sort((a, b) => b - a); // --> Sorts them in descending order.

// Sort in ascending and then reverse them.
numbers.sort();
numbers.reverse();

// 11. indexof() --> returns -1(not exist) else the index.
numArr.indexOf(10); // index->0

// 12. find()
// The find() method is used to search for the first element in an array 
// that meets a specific condition. If found, it returns that element; 
// otherwise, it returns undefined
// Examples :- 

let numbers2 = [10, 20, 30, 40, 50];
let result = numbers2.find(num => num > 25);
console.log(result);  
// Output: 30 (first number greater than 25)

let names = ["Anvesh", "Shiva", "Rahul"];
let foundName = names.find(name => name.startsWith("S"));
console.log(foundName);  
// Output: "Shiva" (first name starting with "S")



// Advanced loops 

// 1. forEach --> Iterate on all the elements of only arrays
let chota = ["anvesh","shiva","abdul","abhi","ganesh"];
chota.forEach((value,index)=> {
  console.log(value+" "+index);
});

// 2. for in --> iterate on any enumerable properties(Objects)
//  Used for iterating over object properties (keys).

let person = { name: "Anvesh", age: 25, city: "Hyderabad" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 3. forof --> (Used for Iterables)
// Used for iterating over values of arrays, strings, maps, sets, etc.

let numbers5 = [10, 20, 30];
for (let num of numbers5) {
    console.log(num);
}


// Arrays with functions
let finalArr = [10,20,30,40,50];

function getSum(arr) {
    return arr.reduce((acc,curr)=> {
        return acc+curr;
    },0);
}
let totalSum = getSum(finalArr);