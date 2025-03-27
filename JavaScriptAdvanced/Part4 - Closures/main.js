
///////////////// Closures ///////////////////////
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding
// state (the lexical environment). In other words, a closure gives you access to an outer function's scope 
// from an inner function

//Closure in other words:
//The closure is a collection of all the variables in scope at the time of creation of the function

//Closures mostly get relevant for functions returning functions…. "Higer-order functions"

//////////////////  Closures eks 1  //////////////////////////////
/*
Function greet is a function that returns a new function.
Function greet is "parent function" to the returned anonymous function. 
The anonymous functions definition is a function expression, since it returns a
functions object - it's a higher-order function. 
*/

/*
function greet(whatToSay) {
    return function(name) {
        console.log(whatToSay + ' ' + name);
    }
}
*/
//greet('Hi')('Tony');      //output: Hi Tony


/*
When greet is invoked it returns a function, which in turn can be called - it is done with the extra brackets ( ) 
We can assign the returned function from greet to a variable and then invoke the function later:
*/

//var sayHi = greet('Hi');
//sayHi('Tony');            //output: Hi Tony

/*
That is the phenomenon Closures, which makes the whatToSay variable live and can be referenced from the anonymous function
even after the external function (greet) is completed. The variables found in the Outer Environment become "Closed in"
in the Execution context of the anonymous function.
*/

/*
function incByFuncFactory(aInc){
  return (aVal) => {
    return aVal + aInc;
  }
}

var theInc = 35;
var incFunc = incByFuncFactory(theInc);

console.log(incFunc(20)); //output 55

theInc = 60;

console.log(incFunc(20)); //output 55

*/

//////////////////  Closures eks 2  (solution closures-1) //////////////////////////////


function buildFunctions(){
    var arr=[];
    for (var i=0; i<3; i++){
        arr.push(function() {console.log(i);})
    }
    return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();


/*
function buildFunctions2(){
    var arr=[];
    for (var i=0; i<3; i++){
        let j = i;
        arr.push(function() {console.log(j);})
    }
    return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();
*/

/*
function buildFunctions3(){
  var arr=[];
  for (let i=0; i<3; i++){                      //Notice: let vs var
      arr.push(function() {console.log(i);})
  }
  return arr;
}

var fs3 = buildFunctions3();
fs3[0]();
fs3[1]();
fs3[2]();
*/
//////////////////  Closures eks 3 - Function Factories  (solution closures-2) //////////////////////////////
/*
function makeGreeting(language) {
    return function(firstname, lastname){
        if (language==='en'){console.log('Hello ' + firstname + ' ' + lastname)};
        if (language==='dk'){console.log('Hej ' + firstname + ' ' + lastname)};
        if (language==='es'){console.log('Hola ' + firstname + ' ' + lastname)}
    }
}

var greetEnglish = makeGreeting('en');
var greetDanish = makeGreeting('dk');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe');
greetDanish('Henrik', 'Høltzer');
greetSpanish('Pablo', 'Fuentes');

*/

/*
Note each call of makeGreeting () results in a new Execution Context, which means each call
gets its own space in memory. Functions expressions return a function object and Closures does that
the external variable "language" is preserved and can be used when the internal anonymous function is called
*/

// now with ES6 Arrow-function instead of traditional function definition ///////// Opgave Løsning ////////////

/*
function makeGreeting2(language) {
    return (firstname, lastname) => {
        if (language==='en'){console.log('Hello ' + firstname + ' ' + lastname)};
        if (language==='dk'){console.log('Hej ' + firstname + ' ' + lastname)};
        if (language==='es'){console.log('Hola ' + firstname + ' ' + lastname)}
    }
}
*/

//////////////////  Closures eks 4 - Function Factories  ///////// (solution closures-2) /////////////////////
/*
function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  var addHello = makeAdder("Hello ");

  console.log(add5(2));  // 7
  console.log(add10(2)); // 12
  console.log(addHello("Henrik"));
*/



//////////////////  Closures eks 5 - Callbacks  //////////////////////////////

function sayHiLater(){
    var greeting = 'Hi';
    setTimeout(function(){console.log(greeting);}, 3000)
}

//sayHiLater();


/*
The anonymous function given to setTimeout is a "First class function" (meaning that the function can be used as
arguments and created "on the fly"). The function definition in the setTimeout argument is a "function expressions"

setTimeout is an asynchronous call that is part of the event loop - that is, setTimeout closes and sends to the Browser to be executed.
Here, it waits until the time has elapsed (3000 ms) and an event is dropped. JS Engine checks if there are functions waiting / listening and
calling our anonymous function. Since the greeting variable does not exist locally in the function and sayHiLater is completed, it search in the "scope chain"
and greeting can be found in the functions Closures. So, due to the Closure phenomenon, the feature still has access to greeting.
*/




///////////////////////////// Callback function ("call-after") /////////////////////////////////
/*
function tellMeWhenDone(callback){
    // .... some work
    callback();  // 'callback': When the function is complete (with "some work"), the function that was given as the argument is called (the callback function)
}

tellMeWhenDone(function(){console.log("Im' done!")});
tellMeWhenDone(function(){console.log("All done!")});
*/


/*
var myArr = [ {num: 5, str: 'apple'}, {num: 7, str: 'cabbage'}, {num: 1, str: 'banana'}]

myArr.sort((val1, val2) => {
  if (val1.str < val2.str) 
    return -1; 
  else return 1;
});

console.log(myArr);
*/



//////////////////////////// Promise ///////////////////////////////////////////////
//I JS er der ingen koncepter vedr pause/sleep, så når der anvendes "long running" funktioner
//ala "hent data via webservice" har vi brug for en metode til at afgøre om funktionen er afsluttet -
//og når den er afsluttet "at køre noget kode"
//Det er her Promise kommer ind!!
//Et Promise kan være i 3 tilstande: "unresolved", "resolved" el. "rejected" - kald af resolve() og reject() ændre tilstanden fra 
//"unresolved" (waiting) til enten "resolved" eller "reject".



// copy past the code to the devtool console and run, try also writing reject()

// here is registered a callback that is executed when the promise changes status/state to resolved
/*
var promise = new Promise((resolve, reject)  => {
    resolve(); 
    //reject();
});

//promise.then(()=>console.log('Im finish'));
//promise.then(()=>console.log('Im finish')).then(()=>console.log('jeg blev også kaldt')); // Here are registered 2 callbacks, both are called


//this can be written more readable:
promise
    .then(()=>console.log('Im finish'))
    .then(()=>console.log('jeg blev også kaldt'))
    .catch(()=>console.log('uh oh!!'))

*/

//////////////////// More Promise /////////////////////////
/*
promise = new Promise((resolve, reject)  => {
  setTimeout(()=>{resolve();}, 3000);
});

promise
    .then(()=>console.log('Im finish'))
    .then(()=>console.log('jeg blev også kaldt'))
    .catch(() => console.log('uh oh!!'))

*/
///// Test with other names /////////////////// 
//it's not the names: resolve and reject, but the parameter list that matters
/*
promise = new Promise((res, rej)  => {
  setTimeout(()=>{res();}, 3000);
});

promise
    .then(()=>console.log('Im finish'))
    .then(()=>console.log('jeg blev også kaldt'))
    .catch(() => console.log('uh oh!!'))

*/   
//////////////////// More Promise - fetch solution Promise-3 /////////////////////////
/*
url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
  .then(data => console.log(data));
*/

// Note that we do not immediately get our data back with fetch,
// only an object representing the responce we get from the server.
// but we can get our data by calling json ():

/*
url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
  .then(responce => responce.json())
  .then(data => console.log(data));

*/
// Another inconvenience of fetch - catch is not executed at e.g. 404 as expected
// as done in other lib ala axios

/*
url = "https://jsonplaceholder.typicode.com/postsxx/";

fetch(url)
  .then(data => console.log(data))
  .catch (error => console.log('BAD', error));
*/

/*
// Catch is called only if, for example, the server does not exist:
url = "https://jsonplaceholder.typicode123456.com/posts/";

fetch(url)
  .then(data => console.log(data))
  .catch (error => console.log('BAD', error));
*/

// Therefore, axios are recommended instead


/*
url = "https://ergast.com/api/f1/2020/drivers.json";
fetch(url)
  .then(responce => responce.json())
  .then(data => console.log(data));
 
*/

/////////////////////// promise - with traditionel AJAX - solution Promise - 2///////

promise = new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.open('GET', 'https://ergast.com/api/f1/2019/drivers.json');
  request.onload = () => {
    if (request.status === 200) {
      resolve(request.response); // we got data here, so resolve the Promise
    } else {
      reject(Error(request.statusText)); // status is not 200 OK, so reject
    }
  };

  request.onerror = () => {
    reject(Error('Error fetching data.')); // error occurred, reject the  Promise
  };

  request.send(); // send the request
});


console.log('Asynchronous request made.');

promise.then((data) => {
  console.log('Got data! Promise fulfilled.');
  var result = JSON.parse(data).MRData.DriverTable.Drivers;
  document.body.textContent = JSON.stringify(result);
  console.log(result.map(data => {return {FirstName : data.givenName}}));
  
}, (error) => {
  console.log('Promise rejected.');
  console.log(error.message);
});


//////////////////////////// Axios Solution////////////////////////

//import axios from 'axios';
//const axios = require('axios')
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

////// Promise ///////////////////////////////
/*
const getBreeds = () => {
  try {
    return axios.get('https://dog.ceo/api/breeds/list/all')
  } catch (error) {
    console.error(error)
  }
}

const countBreeds = async () => {
  const breeds = getBreeds()
    .then(response => {
      if (response.data.message) {
        console.log(
          `Got ${Object.entries(response.data.message).length} breeds`
        )
      }
    })
    .catch(error => {
      console.log(error)
    })
}

countBreeds()
*/
///////////// await/async //////////////////////////////////////////////
/*
const getBreeds1 = async () => {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all')
    } catch (error) {
      console.error(error)
    }
  }
  
  const countBreeds1 = async () => {
    const breeds = await getBreeds1()
  
    if (breeds.data.message) {
      console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
  }
  
  countBreeds1()
  

*/
  /////////////////////// axios - with Promise solution Promise-5 //////////////////
  /*
  function getFormular1DriverInfo() {
    axios.get('https://ergast.com/api/f1/2020/drivers.json')
      .then(res => {
        console.log(res.data.MRData.DriverTable.Drivers);
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getFormular1DriverInfo();
  
  */
  /////////////////////// axios - with async/await solution Promise-6 //////////////////
  /*
  const getFomular1Drivers = async () => {
    try {
      return await axios.get('https://ergast.com/api/f1/2018/drivers.json')
    } catch (error) {
      console.error(error)
    }
  }
  
  const DriversInfo = async () => {
    let drivers = await getFomular1Drivers()
  
    console.log(drivers.data.MRData.DriverTable.Drivers);
    
  }
  
  DriversInfo();
  */