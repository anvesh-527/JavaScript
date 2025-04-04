// Common Built-In Objects

// Math Object
// Math.PI;
// Math.max(1,2,3,4,5,6,7,8);
// Math.min(1,2,3,4,5,6,7,8);
// Math.round(1.2); --> 1
// Math.round(1.5); --> 2
// Math.round(1.7); --> 2
// Math.floor(1.9) --> 1
// Math.ceil(1.9); --> 2
// Math.abs(-1); 
// Math.random(); 0--->>1 (Output in the range) 1-->Exclusive,0--> Inclusive


// Date Object
let curr = new Date();
console.log(curr);
// Output:
// 2025-04-04T17:01:04.738Z

// Another way
let date = new Date('Nov 3 2004 06:15');
console.log(date);

let newDate = new Date(1998,0,20,7);
console.log(newDate);
// 0->Months (Zero based indexing)

newDate.getDay();
// Zero based indexing

// Get methods set methods are also available

