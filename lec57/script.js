// async function getData() {
//     setTimeout(()=>{
//         console.log("Unna Lenate");
//     },3100);
// }
// getData();

//Await

//Fetch API - get Method
// async function getData(params) {
//     let response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
//     // Parse json - async
//     let data = await response.json();
//     console.log("data is: ",data);
// }
// getData();

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

async function getData() {
    const url = "https://dummyjson.com/posts/";
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get Data is: ",data);
}

async function postData(params) {
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