// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Namasthe Dunia!!");
//     setTimeout(function leni(){
//         console.log("Unna Lenate! ");
//     },6400);
//     resolve(1);
// });


// let promise1 = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success) {
//         resolve("Promise is Resolved.")
//     } else {
//         reject("Promise is rejected.")
//     }
// });

// promise1.then((message)=>{
//     console.log("Then ka message is : ",message);

// }).catch((error)=>{
//     console.log("Error : ",error);
// });

// promise1.then((message)=>{
//     console.log("First Meassage: ",message);
//     return "Done with First Message."
// }).then((message)=>{
//     console.log("Second Meassage: ",message);
//     return "Done with Second Message."
// }).then((message)=>{
//     console.log("Third Meassage: ",message);
//     return "Done with Third Message."
// }).then(()=>{
//     console.log("Done!!!");
// }).catch((error)=>{
//     console.error(error);
// }).finally(()=>{
//     console.log("I am always executed.");
// })

let p1 = new Promise((resolve, reject) => {
    setTimeout(reject,1000,"First")
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Second")
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Third")
});

Promise.all([p1,p2,p3])
.then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log("Error: "+error);
})
// Creates a new promise which is marked resolve when all the promises insde it are marked.