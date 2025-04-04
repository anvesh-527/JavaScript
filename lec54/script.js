// Code 1

const t1 = performance.now()

for(let i=1;i<=10000;i++) {
    let newPara = document.createElement('p');
    newPara.innerText="Paragraph "+i;
    document.body.appendChild(newPara);
}

const t2 = performance.now()

console.log("total time taken for the first code is: ",t2-t1);

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

//Best Code 

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