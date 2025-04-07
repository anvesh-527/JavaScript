// Performance --> Reflow and re-paint


// Code 1
// performance.now() --> This is the standard way to measure how much time my code is taking to run.
// Gives the output of a timestamp

const t1 = performance.now()

for(let i=1;i<=10000;i++) {
    let newPara = document.createElement('p');
    newPara.innerText="Paragraph "+i;
    document.body.appendChild(newPara);
}

const t2 = performance.now()

console.log("total time taken for the first code is: ",t2-t1);

// Code 2 (better code)

let parent = document.createElement('div')

const t3 = performance.now()

for(let i=1;i<=10000;i++) {
    let newPara = document.createElement('p');
    newPara.innerText="Paragraph "+i;
    parent.appendChild(newPara);
}

document.body.appendChild(parent);

const t4 = performance.now()

console.log("total time taken for the second code is: ",t4-t3);


// Reflow and repaint
// reflow -- > It is a process of calculating position/dimensions of an element
// It is computationally intensive

// repaint --> process of displaying/content pixel by pixel

// Less reflow,repaint --> faster code

// Code 1 --> 
// 100 reflow , 100 repaint
// Every time we are painting (this is para ..)

// Code 2
// 101 reflow but only 1 repaint
// One extra reflow is to add myDiv to the body

// So, code 2 is efficient than code 1

// Document fragment --> Lightweight docuemnt object (takes less computayional resouces)
// When we add an element to this fragment --> no reflow or no repaint takes place
// It takes 1 reflow, 1 repaint when we add this fragment to the body


// Best Code 

let fragment = document.createDocumentFragment();

const t5 = performance.now();

for(let i=1;i<=10000;i++) {
    let newPara = document.createElement('p');
    newPara.innerText="Paragraph "+i;
    // No reflow, no repaint for the below line.
    fragment.appendChild(newPara);
}

// This line will take 1 reflow and 1 re repaint.
document.body.appendChild(fragment);

const t6 = performance.now();

console.log("total time taken for the Best code is: ",t6-t5);

// Almost same time might be taken for code 2, best code
// Sometimes code 2 might also take less time than best code