

// function changeText(event) {
//     console.log(event);
//     let element = document.getElementById('fpara');
//     element.innerText="Unna Levana Levanate";
// }

// let element = document.getElementById('fpara');

// element.addEventListener('click',changeText);

// element.removeEventListener('click',changeText);

// let anchor = document.getElementById('fanchor');

// function defaultStop(event) {
//     event.preventDefault();
//     anchor.textContent="Click Performed Successfully";
// }

// anchor.addEventListener('click',defaultStop);


// let paras = document.querySelectorAll('p');

function alertFunction(event){
    if(event.target.nodeName==='SPAN') {
        alert("You have clicked on "+event.target.textContent);
    }
}

// for(let i=0;i<paras.length;i++) {
//     let para = paras[i];
//     para.addEventListener('click',alertFunction);
// }

let myDiv = document.getElementById('wrapper');
myDiv.addEventListener('click',alertFunction);