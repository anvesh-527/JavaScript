function init() {
    // The inner function and the data is binded.
    let name = "Leni Lingi";
    function getMyName() {
        let name = " Lenate";   
        console.log(name);
    }
    return getMyName;
}
let leni = init();
leni();

// function hello() {
//     let name = "Anvesh";
//     console.log(name);
// }
// hello();