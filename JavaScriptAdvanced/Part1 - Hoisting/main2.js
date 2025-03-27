function myFuncF(){
    console.log(theMsg);
}

function myFuncG(){
    var theMsg = "Hello Moon";
    myFuncF();
}

var theMsg = "Hello Sun";
myFuncG();



console.log(a);
var a = 5;

console.log(a1);
let a1 = 5;

function c() {
 
    function b(){
        console.log(myVar);
    }

    var myVar = 2;
    b();

}

myVar = 1;
c();