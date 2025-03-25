
// promise = new Promise((resolve, reject)  => {
//     resolve(); // reject();
// });

// promise
//     .then(()=>console.log('Im finish'))          //callback, udføres ved resolved
//     .then(()=>console.log('jeg blev også kaldt'))  
//     .catch(() => console.log('uh oh!!'))         //callback, udføres ved reject




// promise = new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
  
//     request.open('GET', 'https://api.icndb.com/jokes/random');
//     request.onload = () => {
//       if (request.status === 200) {
//         resolve(request.response); // we got data here, so resolve the Promise
//       } else {
//         reject(Error(request.statusText)); // status is not 200 OK, so reject
//       }
//     };
  
//     request.onerror = () => {
//       reject(Error('Error fetching data.')); // error occurred, reject the  Promise
//     };
  
//     request.send(); // send the request
//   });
  
//   console.log('Asynchronous request made.');
  
//   promise.then((data) => {
//     console.log('Got data! Promise fulfilled.');
//     document.body.textContent = JSON.parse(data).value.joke;
//   }, (error) => {
//     console.log('Promise rejected.');
//     console.log(error.message);
//   });
  

// url = "https://ergast.com/api/f1/2024/drivers.json";
// fetch(url)
//   .then(responce => responce.json())
//   .then(data => console.log(data));
