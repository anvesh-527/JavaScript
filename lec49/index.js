// Object Cloning

// Dynamic nature of Object --> Change the properties of the object at the runtime.
let obj = {
    age:12,
    wt:60
}
obj.color="whilte";
console.log(obj);

// Object Cloning (Deep Clone)

// 1. Spread operator
// Example :-
let obj = {
    age:12,
    wt:60,
    ht:170
}

let newObj = {...obj};

obj.age=20;

console.log(obj);
console.log(newObj);

// Output:
// { age: 20, wt: 60, ht: 170 }
// { age: 12, wt: 60, ht: 170 }

// 2. Assign method
{

    let obj = {
        age:12,
        wt:60,
        ht:170
    }
    
    let newObj = Object.assign({},obj);
    
    obj.age=20;
    
    console.log(obj);
    console.log(newObj);
}
// Output --> Same as above

// 3. Iteration

{

    let obj = {
        age:12,
        wt:60,
        ht:170
    }
    
    let newObj={};

    for(let key in obj) {
        let newKey = key;
        let newValue = obj[newKey];
        // newObj[`${newKey}`]=`${newValue}`; (This can also be used instead of the below one)
        newObj[newKey]=newValue;
    }
    
    obj.age=20;
    
    console.log(obj);
    console.log(newObj);
}

// Garbage Collector --> The memory which is no longer in use.
// We cannot control this.
// This always runs in the background.