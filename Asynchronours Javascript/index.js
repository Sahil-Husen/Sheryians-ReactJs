// fetch(`https://jsonplaceholder.typicode.com/todos`)
//   .then((response) => response.json())
//   .then((data) => data.forEach((e)=>console.log(e)));

//  THIS IS  ALL ABOUT PROMISES

//   const promises =  new Promise((resolve,reject)=>{
//     fetch(`https://jsonplaceholder.typicode.com/todos/1`)
//     .then(raw => raw.json())
//     .then(result =>{
//         if(result.userId == 2){
//             console.log(result);
//             resolve();
//         }
//         else{
//             reject();
//             console.log(reject);
//         }
//     })
//  })
//  promises.then(()=>{
//     console.log('Resolved');
//  })
//  .catch(()=>{

//     console.log('Rejected');
//  })

// CALLBACK
// function add(a,b){
//     b();
// }

// add(1,function b(){console.log('call back chala')})

// DATA FETCHING USING CALLBACK
// function apiFetcher(url,callBack){
//     console.log('run');
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callBack(result)
//     })
//     console.log('ended');
// }
// apiFetcher('https://randomuser.me/api/',(result)=>{
//     console.log(result);
// })

// Fetching the API Using Promises

// async function fetcher(url){
//      const promises = new Promise((resolve,reject)=>{
//         fetch(url)
//         .then(raw => raw.json())
//         .then(result => {
//             resolve(result)
//         })
//     })
//     return promises;
// }

// fetcher('https://randomuser.me/api/').then((result)=>{
//     if(result.results[0].gender === 'female'){
//         console.log('Successful');
//         console.log(result.results[0]);

//     }
// })
// .catch(()=>{
//     console.log("Code is Fucked");
// })

// 3rd WAY TO FETCH THE DATA FROM API

async function dataFetcher(url) {
  let response = await fetch(url);
  let data = await response.json();

  return data;
}

async function api() {
  let datas = await dataFetcher("https://randomuser.me/api/");
  console.log(datas);
}
api();
