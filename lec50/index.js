// Error Handling 

// Error -> any event that disrupts the normal flow of execution
// 2 types -> Compile and runtime errors.

// 1. Compile error
// console.log('1);

//  2. RUntime error
// console.log(x);

// Error Handling --> try-catch block.
{
    try{
        // Where the error can occur.
    } catch(err) {
        // What to do when an error occured.
    } finally{
        // Always executes.
    }
}

{
try {
    console.log(x); // This will throw an error
} finally {
      
}
}

// Custom error Using throw key word.

try {
    console.log(x);
} catch (err) {
    throw new Error("Pehle declare kardo");
}
// Output 
// Error: Pehle declare kardo

// Example :-2 
let errorCode = 100;
if(errorCode==100) {
  throw new Error("Invalid Json");
}
// Output 
// Error: Invalid Json

