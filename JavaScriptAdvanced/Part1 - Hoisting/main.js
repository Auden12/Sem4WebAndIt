
///// DEMO 1 - Global Object (this == Window)
//Just run a empty file - 'this' is still assigned the global object - type this in the console



///// DEMO 2 - not in a function - so a and b is assigned to the global object

/*
var a = "Hello world!";
function b(){};
console.log(a);
*/




/////////////////////////// Hoisting demo  part1 //////////////////////////////////////
// What is expected? "b called! Hello World!"

/*
var a = "Hello world!";
function b(){console.log("b called!")};

b();
console.log(a);

*/
//Exactly as expected!




/////////////////////////// Hoisting demo  part2 //////////////////////////////////////
// What is expected? ERROR - like in C#?

/*
b();
console.log(a); 

var a = "Hello world!";
function b(){console.log("b called!")};
*/

//No ERROR but: "b called  undefined" - thats hoisting
//What if we outcomment var a = "Hello World"?



/////////////////////////// Undefined vs Error demo //////////////////////////////////////
// undefined is like the null-object in c# - means is not set yet

/*
var a;
console.log(a);  //a is undefined

//console.log(b);  //b is not defined : error!! (Uncaught ReferenceError)


if(a===undefined){console.log("a is undefined");}
*/
// Its like null-object - a special value all varible is set to durring the first phase - we can test!



/////////////////////////// More Undefined - execution phase  demo //////////////////////////////////

/*
function b() {
    console.log("b called");
}

b();
console.log(a);
var a = "Hello World!";
console.log(a);
*/


/////////////////////////// Execution stack - outer environment //////////////////////////////////


//  function b(){};
//  function a(){
//      b();
//  }
//  a();


// What will be printed out 'undefined', 'Hello Moon' or 'Hello Sun' ??
/*
function myFuncF(theMsg){console.log(theMsg)};
function myFuncG(){
    let theMsg = 'Hello Moon';
    myFuncF(theMsg);
}

var theMsg ='Hello Sun';
myFuncG();
*/



///// DEMO Executionenvironment - see ExecutionEnvironment.docx  /////////////////////////////////////////////


/*
function A(){
    let a = "a";
    console.log("A: " + a);
    var g = "ag";
    console.log("A: " + g);
    //console.log(b);  //b is not defined
    B();
}

function B(){
    let b = "b";
    console.log("B: " + b);
    console.log("B: " + g);
  //console.log(a); //a is not defined
}

var g = "g";
console.log("Global: " + g);
A();

*/

/*
function A1(){ 
    var myVar = "2";
    B1();
}

function B1(){
    console.log(myVar);
}

var myVar = "1";
A1();
B1();

function A2(){
    
    function B2(){
         console.log(myVar);
    }
    var myVar = "2";
    B2();
}

var myVar = "1";
A2();
//B2();
*/



//////////////////////////////// Single threaded, Synchronous and Asynchronous Callbacks /////////////////////
// JS Engine er i sig selv Single Threaded - Synchronous, dvs kan kun udfører en kommando ad gangen og i ordnet sekvens, 
// men Browseren selv, kan udfører job Asynchronous, fx html-rendering og http-request kan køre asynkront med JS-Engine.
/*
function waitTreeSeconds(){
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log("function finished");
}

function clickHandler(){
    console.log("clik event!");
}

document.addEventListener('click', clickHandler);

waitTreeSeconds();
console.log("finished execution");
*/


//////////////////////////////// Objects and Functions ////////////////////////////////////////////////////////////

/*
var person = new Object();          //laver et simpelt objekt

person["firstname"] = "Henrik";     //benytter "Computed Member Access operator" '[]' til at tildele properties værdier
person["lastname"] = "Høltzer";     //bemærk, da de ikke findes i forvejen laves de "on the fly"

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]); //benytter variabel til at tilgå property i objektet

console.log(person.firstname);      //benytter "Member Access operator" '.' eller til daglig 'dot-notation'

person.address = new Object();
person.address.street = "Maglegårdsvej 2";
person.address.city="Roskilde";

console.log(person["address"]["city"]);

*/


/////////////////////////////// Object and Object literals ///////////////////////////////////////////////

//var person = {} //same as new object();
/*
var person = {firstname : 'Henrik', lastname : 'Høltzer'};


var henrik = {
    firstname : 'Henrik',
    lastname : 'Høltzer',
    address : {
        street : 'Maglegårdsvej 2',
        city : 'Roskilde',
        zipcode : '4000'
    }
}

function greet(person){                          //just a simple function
    console.log('Hi ' + person.firstname);
}

greet(henrik);                                   //simple call with an object as argument
greet({firstname:'Per', lastname : 'Lauersen'}); //object created "under the fly" - with Object Literal syntax!

*/


/////////////////////////////// JSON and Object literals ///////////////////////////////////////////////
//json and object literals syntax is very similar - both samples is valid object literals, but only the last i valid json

/*
var objLiteral = {
    firstname : 'Henrik',
    isATeacher : true
}

console.log(objLiteral);

var jsonSyntax = {
    "firstname" : "Henrik",      //in json the property must be wrapped in "quotes"
    "isATeacher" : true
}

console.log(jsonSyntax);


console.log(JSON.stringify(objLiteral)); //takes an object literal object and makes a JSON string
console.log(JSON.parse(' {"firstname" : "Henrik", "isATeacher" : true} '))  //takes a string with a JSON object and makes a JS object
*/



//////////// Functions are Objects - First class functions ///////////////////////////////////////////////////
// Every thing you can do with other types, you can do with functions!
// They can be assigned to variable, passed as arguments and "created on the fly"
// Like other objects, primitive properties, objects and functions 
//   can be attach to a function! - since functions are objects!

/*
function greet(){ console.log('hi');}  //just a simple function 
greet.language = 'english';            //Attach of a property to a function - possible because functions is an object

console.log(greet.language);
*/


//////////// Function statements and function expressions //////////////////

//function statement: 
//function greet(){console.log('Hi ');} 

//function expressions - because an object is returned
//The function is an object - is created "under the fly" and assigned the variable
/*
var anonymousGreet = function(){console.log('Hi ');} 



greet(); // thise goes well because of the Hoisting
function greet(){console.log('Hi ');} 
*/
//anonymousGreet(); //gives an error: anonymousGreet is not a function

//Its only the variable anonymousGreet there is Hoisted
//var anonymousGreet = function(){console.log('Hi ');} 

//anonymousGreet();
//*/

///////////////////////////////////////////////////////////////////////////
//*
function log(a) {
    console.log(a);
}


//The objects are created "on the fly" e.g. the anonymous obj containing name/value pair greeting : 'Hi'
log(3);
log("Hello");
log({greeting : 'Hi'});
log(function(){console.log('Hi')}); //a function object is created, but never called here
log(function(){console.log('Hi')}());//The function is executed, but has no returning value - so 'a' is undefined

log(function(a){return a}(3))  //a function object is created and invoked - it has a return value - so 'a' is sendt to the console
//*/

//////////////////////////////////////////////////////////////////////
//log is called with a function expression as argument
//log invokes the function - and print 'Hi' too the console
/*
function log(a){
    a();
}

log(function(){console.log('Hi');});  //function expression - since the function returns a function object - Log take this object as argument and invoke the function
*/



////////////////// Objects, Functions and 'This' ///////////////////////////////////////////////
/*
console.log(this);                      //output: window, since it's a global object

function a() {console.log(this)};
a();                                    //output: still window, since 'this' refer to global object 

var b = function(){console.log(this)};
b();                                    //output: still window, no diff on statement or expression here


var c = {
    name : 'The C object',
    log : function(){console.log(this)}
}
c.log();                                //output: {name: "The C object", log: ƒ}
                                        //'this' points to c obj, when a function is a methode in an objekt - 'this' points to the object it self
                                        //"The c-object contains the method!"

var d = {
    name : 'The D object',
    log : function(){
        this.name = 'updatet object';
        console.log(this)
    }
}

d.log();                                //output: {name: "updatet object", log: ƒ}
                                        //with 'this' in a methode its possible to change the object the methoden is attached to.
*/
//////////////////////////////////////////////////////////////////////////