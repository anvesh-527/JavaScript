// Event loop
// Majority of the code that we have written till now is synchronous


// Synchronous code --> The piece of code which executes at the same time 
// Example:-  console.log("Anvesh");

// Asynchronous code --> The piece of code which doesn't execute at the same time 
// Example :- setTimeout() , event Listener
// We cannot say that after a certain amount of time the piece of code gets executed 

function sayMyName() {
    console.log("Anvesh");
}
setTimeout(sayMyName,5000);
// We cannot say that after 5sec only this will execute sometimes it may take even more time also 
// If there are any statements after setTimeOut() they should wait
// To handle Asynchronous code --> we use eventLoop

// Call Stack , Browser , Callback Queue are the 3 important topics in the event loop

// Javascript being an single threaded code --> how it handles asynchronous code and concurrency --> using event loop  


// Refer Notes 
