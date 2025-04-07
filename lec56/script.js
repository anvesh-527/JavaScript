// Promises --> It is an object which is used to handle the async code in a clean way
// The promise object represents the eventual completion (or failure) of an async operation and its resulting value

// 3 states --> pending,fulfilled,rejected
// This lets async code to return values like sync code
// Instead of immidiately returning the final value, the async method returns a promise 
// to supply the value at somepoint of time in the future

// Example :- 
let firstPromise = new Promise((resolve, reject) => {
    console.log("Namasthe Dunia!!");
    setTimeout(function leni(){
        console.log("Unna Lenate! ");
    },6400);
    resolve(1);
    // reject(new Error("Internal Server Error"));
    // When we reject we should throw an error
});



// If I want to perform a task when the promise is fulfilled we use then
// Catch is used to catch the error (The code to be performed when the state of the promise is rejected)


let promise1 = new Promise((resolve,reject)=>{
    let success = true;
    if(success) {
        resolve("Promise is Resolved.")
    } else {
        reject("Promise is rejected.")
    }
});

promise1.then((message)=>{
    console.log("Then ka message is : ",message);
}).catch((error)=>{
    console.log("Error : ",error);
});

// If success is false --> Error :  Promise is rejected.
// Else --> Then ka message is :  Promise is Resolved.


// Any number of then statements can be used.
// We call this concept as promise chaining
promise1.then((message)=>{
    console.log("First Meassage: ",message);
    return "Done with First Message."
}).then((message)=>{
    console.log("Second Meassage: ",message);
    return "Done with Second Message."
}).then((message)=>{
    console.log("Third Meassage: ",message);
    return "Done with Third Message."
}).then(()=>{
    console.log("Done!!!");
}).catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.log("I am always executed.");
});


let p1 = new Promise((resolve, reject) => {
    setTimeout(reject,1000,"First");
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Second");
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Third");
});

// When i want to handle execution of multiple promises then we can use
// Creates a new promise which is marked resolve when all the promises insde it are resolved.

Promise.all([p1,p2,p3])
.then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log("Error: "+error);
});
