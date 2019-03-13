// (function(){ // IIFE 
// $(document).ready(function () {
// console.warn('The DOM has finished loading in JS!');
"use strict";

// Lecture notes


// const myPromise = new Promise((resolve, reject) => {
//     let number = Math.random();
//     console.log(`Our number is ${number}`);
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
// myPromise.then(() => console.log('resolved!')); // creates error if prefix (myPromise) is specified // remove semi colon
// myPromise.catch(() => console.log('rejected!')); // creates error if prefix (myPromise) is specified


    // Promise with timeout //


// const myPromise = new Promise((resolve, reject) => {
//     let number = Math.random();
//     setTimeout(() => {
//         if (number > 0.5) {
//             resolve(`Our number is ${number}`);
//         } else {
//             reject(`Our number is ${number}`);
//         }
//     }, 1500);
// });
//
// myPromise.then((data) => console.log(`resolved! ${data}`)); // passes data onto console.log
// console.log(myPromise);
// myPromise.catch((data) => console.log(`rejected! ${data}`)); // passes data onto console.log
// console.log(myPromise);
//
// setTimeout(() => {
//     console.log(myPromise); // a pending promise
// },2000);


    // Resolving Promises


// const makeRequest = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.1) {
//                 resolve('Here is your data: ...');
//             } else {
//                 reject('Network Connection Error!');
//             }
//         }, 1500);
//     });
//
// const request = makeRequest();
// console.log(request); // pending promise
// request.then(data => console.log('Promise resolved!', data));
// // if resolved, will log "Promise resolved!" and "Here is your data: ..."
// request.catch(error => console.log('Promise rejected!', error));
// // if rejected, will log "Promise rejected!" and "Network Connection Error!"
//
// }
//
// console.log(makeRequest);
// console.log(makeRequest());


    // fetch //


// const githubPromise = fetch('https://api.github.com/users/ebehnke');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

// Promise.all([githubPromise])
//     .then((data) =>{
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//         // handle errors
//     });


    // chain //


// Promise.resolve('one').then((one) => {
//     console.log(one);
//     return 'two';
// }).then((two) => {
//     console.log(two);
//     return 'three';
// }).then((three) => {
//     console.log(three);
// });


// Exercises //

// 1. Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

// const myPromise = new Promise((resolve, reject) => {
//     let number = Math.random();
//     setTimeout(() => {
//         if (number > 0.5) {
//             resolve(`Our number is ${number}`);
//         } else {
//             reject(`Our number is ${number}`);
//         }
//     }, 1500);
// });
//
// myPromise.then((data) => console.log(`resolved! ${data}`)); // passes data onto console.log
// console.log(myPromise);
// myPromise.catch((data) => console.log(`rejected! ${data}`)); // passes data onto console.log
// console.log(myPromise);
//
// setTimeout(() => {
//     console.log(myPromise); // a pending promise
// },2000);
//
// const wait = (time) => {
//         return new Promise((kept, broken) => {
//         setTimeout(() => {
//             kept();
//         }, time);
//     });
// };
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


// 2. Generate a Personal Access Token for the github api. We will use this so that we don't get rate limited when
// talking to the github api. You can add the token to your requests like this:

// const myCommits =
//     fetch('https://api.github.com/users/ebehnke', {headers: {'Authorization': gitHubToken}}).then((data) => {
//     return data.json();
//     })
//     .then((jsonData) => {
//         console.log(jsonData.login);
//     });


// const myCommits = fetch('https://api.github.com/users/ebehnke/events/public/', {headers: {'Authorization': gitHubToken}});
// const myCommits = fetch('https://api.github.com/users/ebehnke/events/public/');

    // .map(user => user.payload.commits);
    // myCommits.map(user => user.payload.commits);


// 3. Create a function that accepts a github username, and returns a promise that resolves with the date of the
// last commit that user made. Reference the github api documentation to achieve this.

// const myCommits =
//     fetch('https://api.github.com/users/ebehnke/events/public', {headers: {'Authorization': gitHubToken}})
//         .then((data) => {
//             return data.json();
//         })
//         .then((jsonData) => {
//             console.log(jsonData)
//         });

// console.log(myCommits());

const gitGet = (name) => {
    return fetch(`https://api.github.com/users/${name}/events/public`, {headers: {'Authorization': gitHubToken}})
        .then((data) => data.json())
        .then((data) => data.filter((event) => event.type === "PushEvent"))
        .then((data) => data[0].created_at)
};
gitGet('ebehnke').then((timestamp) => console.log(timestamp));

    // .then((data) => console.log(`${name}'s last commit was on ${data}`));












// }); // jQuery end
// })(); // IIFE end //
