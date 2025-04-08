// Async - await and Fetch API
// Using async await we can make the async code work similar to sync code

// Whenever we mark a part of code as async then only we should move to the next block of code


async function getData() {
    setTimeout(()=>{
        console.log("I am inside TimeOut Block");
    },3100);
}
let output = getData();  //Always returns a promise

//Await 

// Get Post Put Delete --> Request types
//Fetch API - get Method
async function getData(params) {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
    // By marking await we stop the flow of execution until the response is received
    // Parsing json - async
    let data = await response.json();
    console.log("data is: ",data);
}
getData();


// Fetch API - post method  

const myHeaders = new Headers();
myHeaders.append("Content-type","application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method : "POST",
    body : JSON.stringify({
        username : "Anvesh"
    }),
    headers :  myHeaders,
};


async function getPostData() {
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("Post data is: "+data);
}
getPostData();

async function getData() {
    const url = "https://dummyjson.com/posts/";
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get Data is: ",data);
}
getData();

async function postData() {
    const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'I am in love with someone.',
          userId: 5,
          /* other post data */
        })
      })
      .then(res => res.json())
      .then(console.log);;
    let data = await response.json();
    console.log("Post Data is: ",data);
}

async function calling() {
    await postData();
    await getData();
}

calling();
