//Demo af Prototype - begrebet
var person = {
    firstName : 'Default',
    lastName : 'Default',
    getFullName : function(){
        return this.firstName + ' ' + this.lastName;
    }
}

var henrik = {
    firstName : 'Henrik',
    lastName : 'Høltzer'
}


//Don't do this EVER!! - for demo purpose only!!
//Her adressere vi __proto__ direkte og giver dermed henrik objektet adgang til properties og metoder i person
//Bemærk, når funktionen getFullName kaldes ved execution context hvilket objekt den er kaldt på, derfor ref this til henrik og ikke person
henrik.__proto__ = person
console.log(henrik.getFullName())
console.log(henrik.firstName)


var peter = {
    firstName : 'Peter'
}

peter.__proto__ = person
console.log(peter.getFullName())
console.log(peter.firstName)
console.log(peter.lastName)


//A better way to use prototypal inheritance

const anders = Object.create(person)
anders.firstName = 'Anders'
console.log(anders.getFullName())


//Demonstration af "build-in" eller Base Objects (vi kender det fra class Object i C# og Java)
//vis i consol:
//a.__proto__ viser "Base-object, nederste objekt i prototype-chain" og a.__proto__. viser alle prop/metoder i base-object fx toString
//tilsvarende for b og c vises prop/metoder til fuction og array "base-objectet" og b._proto__.__proto__ viser base-objektet til object 

var a = {};
var b = function(){};
var c = [];

//Vi kan også benytte reflektions fx
for (var prop in henrik){
    console.log(prop + ' : ' + henrik[prop]);
}

//her finder vi både firstName, lastName og getFullName fra proto
//ønsker vi kun objektets egne properties (og ikke de arvede) kan vi teste med refleksions
//hasOwnProperty() returnere kun true hvis prop er en prop tilhørende henrik (og ikke arvet via proto)

for (var prop in henrik){
    if(henrik.hasOwnProperty(prop))
        console.log(prop + ' : ' + henrik[prop]);
}



//Constructor function - funktion der konstruerer et objekt
function SimplifiedPerson(firstName, lastName, gender, status){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.status = status;
}


//new er en operator der returnere et tomt objekt, i constructor funktion referere 'this' til dette objekt
// og da der ikke er en return statement i funktionen vil den returnere dette nye objekt 
var henrik = new SimplifiedPerson("Henrik", "Høltzer", "male", "merried");
var lone = new SimplifiedPerson("Lone", "Høltzer", "female", "merried");


//Bemærk "by convention" skal constructor functions modsat alm functions begynde med stort bogstav!!
//Hvis der "glemmes" et new fx var per = SimplifiedPerson(...) kommer der ikke umidelbart en fejl, da det jo er en funktion, 
//problemet er at den ikke returnere et nyt objekt og per sættes til undefined.
//Der findes hjælp (fx lint, der kan markere hvis en funktion med stort ikke kaldes med new) 


//Bemærk vi kan godt tilføje en funktion til det konstruerede objekt, men det skal i så fald gøres for alle objekter
henrik.greet = function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}

henrik.greet()



//Da alle funktioner selv er objekter, kan vi istedet tilføje funktionen til prototypen og den vil være tilgængelig for alle objekterne:
//Bemærk med .prototype kan vi tilføje funktionalitet til eksisterende objekter "on-the-fly"
SimplifiedPerson.prototype.greet = function() {
    console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
}

var john = new SimplifiedPerson("John", "Doe", "male", "merried");
john.greet()
lone.greet()


//Eksemplet fra PPT:
SimplifiedPerson.prototype.formalName = function() {
    return this.title(this.gender, this.status) + this.firstName + ' ' + this.lastName;
}

SimplifiedPerson.prototype.title = function(gender, status) {
    if (gender === "male")
    {
         return "Mr. ";
    }
    else if (status === "merried")
    {
        return "Mrs. ";
    }
    else 
    {
        return "Miss ";
    }    
}

console.log(henrik.formalName())
console.log(henrik.title("female", "merried"))





//Nedarvning Person arver fra SimplifiedPerson - "prototypical inheritance" med call() (kald af base-konstruktør) og Object.create()
function Person (firstName, lastName, gender, status, address){
    SimplifiedPerson.call(this, firstName, lastName, gender, status);
    this.address = address;
}

//Call initialisere de "arvede" properties

//Prototype objektet til Person får en reference til SimplifiedPerson's prototype objekt og kan Person-objekter via prototype-chaining få adgang til alle SimplyfiedPerson's props/functions 
Person.prototype = Object.create(SimplifiedPerson.prototype);

var pA = new Person("Palle", "Hansen", "male", "merried", {
    streetName : "Violhaven", 
    streetNo : 33, 
    city : {
        zipCode : 2765, 
        cityName : "Smørum"
    }
});

console.log(pA.formalName());


//Nu med Class begrebet som vi kender fra c#, men det er kun syntaktisk sukker (der ligger stadigt prototype bag)
class SimplifiedPersonES6 {
    constructor (firstName, lastName, gender, status){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.status = status;
    }

    formalName() {
        return this.title(this.gender, this.status) + this.firstName + ' ' + this.lastName;
    }

    title(gender, status) {
        if (gender === "male")
        {
             return "Mr. ";
        }
        else if (status === "merried")
        {
            return "Mrs. ";
        }
        else 
        {
            return "Miss ";
        }    
    }  
}

var hkh = new SimplifiedPersonES6("Henrik Kryger", "Høltzer", "male", "merried");
console.log(hkh.formalName())




//Bemærk der findes en række prebuild constructor functions fx Number() og String:
//Prøv i consolen at skrive:

//var n = new Number(3);
//n.
//n.prototype
//n.toFixed(2)

//prøv også at udforske var s = new String("test")

//Bemærk, hvor er det vildt at man kan meget simpelt udvide de indbyggede standard typer fx String ved brug af prototype
//Mange js lib/framework benytter denne teknik

String.prototype.isLengthGreaterThan = function (limit){return this.length > limit;}
console.log("Henrik".isLengthGreaterThan(2))


//ES6 Class, Constructor, Extends mm
//Bemærk dette er et Objekt - modsat hvad vi kender fra C#/Java class er ikke en type, kun "sukker", men kan hjælpe med at undgå kald af
//constructor function uden new

class Staff {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greet() {
        return 'Hi ' + this.firstName;
    }
}

var Per = new Staff('Per', 'Jensen'); 
console.log(Per);
console.log(Per.greet());


//Arv med extends, bemærk super svare til base i C# og bemærk at greet bliver redefineret
//extends tildeler værdi til Prototype (__proto__)
class Teacher extends Staff {
    constructor(firstName, lastName) {super(firstName, lastName); }

    greet() {
        return 'Yo ' + this.firstName;
    }
}

var Henrik = new Teacher('Henrik', 'Høltzer');
console.log(Henrik);
console.log(Henrik.greet());