// Closures
// It is the combination of a function bundled together (enclosed) with references to its surrounding state
// Binding a function with the required data
// closure --> {function + {req data (or) lexical scope (or) surrounding state} }


let name = "xyz";
function init() {
    // The inner function and the data is binded.
    let name = "Anvesh";
    function getMyName() {
        let name = "Anvi";   
        console.log(name);
    }
    getMyName(); // returning the function to the init function
}
init();


// Real concept of closures

function outerFunc() {
    let fName = "Shiva";
    function innerFunc()  {
        console.log(fName);
    }
    return innerFunc;
}
let func = outerFunc();
func();

// Getting shiva because the variable fName is binded with the function
// The reference is stored


function hello() {
    let name = "Anvesh";
    console.log(name);
}
hello();