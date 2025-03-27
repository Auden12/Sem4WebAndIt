//////// forEach //////////////////////////////////////////////////////////////////////////
//callbackfn(value: number, index: number, array: number[]): void

var numbers = [1, 2, 3, 4, 5];

//console.log("forEach, number: ")
//console.log(numbers);
//numbers.forEach((item) => console.log(item));
numbers.forEach((item, index, array) => console.log(index, item));


numbers.forEach((item, index, array) => array[index]=item*2);
console.log("forEach, callback:array[index]=item*2 ")
console.log(numbers);

//Bemærk foreach returnere ikke et nyt array (som map), så man kan ikke skrive
//var mumbers2 = numbers.forEach((item, index, array) => array[index]=item*2);


var employees = [
    {name: "Ib", salary: 45000},
    {name: "Bo", salary: 35000},
    {name: "Per", salary: 50000}
]

var increaceSalary = function(employees, amount){
    employees.forEach(employee => employee.salary+=amount);
}

var increaceSalary2 = (employees, amount) => employees.forEach(employee => employee.salary+=amount);

increaceSalary2(employees, 1000);
console.log(employees);



/// Solution: Exercise (forEach - 1) //////////////////////////////////////////////
let names = ['HenriK', 'JAMshid', 'AndERS', 'EBBe', 'pER', 'MicHAel', 'PETEr'];

names.forEach((name, index, array) => {
    if (name.toLowerCase() === 'henrik' || name.toLowerCase() === 'per') name = name.toUpperCase(); 
    else name = name.toLowerCase();
    array[index]=name;
})
//console.log(names)

names = ['HenriK', 'JAMshid', 'AndERS', 'EBBe', 'pER', 'MicHAel', 'PETEr'];

names.forEach((name, index, array) => {
  name = name.toLowerCase();
  if (name === 'henrik' || name === 'per') name = name.toUpperCase(); 
  array[index]=name;
})

//console.log(names);

/// Solution: Exercise (forEach - 2) /////////////////////////////////////////////

let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]

var increaseOwnerTax = function(cars, fuel, taxPct){
    cars.forEach(car => {
        if (car.fuel===fuel) car.owner_tax*=(1+taxPct/100);
    })
}

increaseOwnerTax(cars, 'diesel', 50);
increaseOwnerTax(cars, 'hybrid', 5);
//console.log(cars);

//////////////// map ////////////////////////////////////////////////////////////////////////////


var arr = [1, 2, 9, 16];

const map1 = arr.map(x => x * 2);


//console.log(map1);  // expected output: Array [2, 4, 18, 32]




var numbers = [1, 4, 9, 16];

var roots = numbers.map(Math.sqrt);
//console.log(roots);     // expected output: [1, 2, 3, 4]
//console.log(numbers);   // numbers is still [1, 4, 9, 16]


class Person {
  constructor(firstName, lastName, age){
      this._firstName=firstName;
      this._lastName=lastName;
      this._age=age;
  }

  get firstName(){return this._firstName;}
  set firstName(value){this._firstName=value;}
  get lastName(){return this._lastName;}
  set lastName(value){this._lastName=value;}
  get age(){return this._age;}
  set age(value){this._age=value;}
}

const persons = [new Person("Peter", "Pan", 27), new Person("Donald", "Duck", 35), new Person("Robin", "Hood", 46)];
//console.log(persons);

//console.log(JSON.stringify(persons));

//map, firstName
let personsFirstName = persons.map(p=>p.firstName);
//console.log(personsFirstName);

//mapper et JS-objekt til et andet - udskifter fx "_firstName" til "Fornavn" 
let personsJSObject = persons.map(p=>{return {Fornavn: p.firstName, Efternavn: p.lastName, Alder: p.age }});
//console.log(personsJSObject);

let personsJSON = JSON.stringify(personsJSObject)
//console.log(personsJSON);



let personsAge = persons.filter(p=>p.age>30);
//console.log(JSON.stringify(personsAge));


//Tagged Templates
function personInfo(strings, lastNameExp, ageExp){
  let str0 = strings[0];
  let str1 = strings[1];
  let str2 = strings[2];

  return str0 + lastNameExp + str1 + ageExp + str2;
}

var output = persons.map(p=>personInfo`Mr. ${p.lastName} is ${p.age} years old`);
//console.log(output);

output = persons.map(p=>personInfo`Hr. ${p.lastName} er ${p.age} aar gammel`);
//console.log(output);




/// Solution: Exercise (map - 1)  ////////////////////////////////////// 
/* cars fra opgaven med forEach
let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]*/

var carModels = cars.map(car => car.model);
//console.log(carModels);


var carBrand = cars.map(car => {return {Mærke : car.brand}});
//console.log(carBrand);

////////////////////////////////////////////////////////////////////////////////

/*
Når man kalder en webservice modtager man ofte data som en tekst-streng der indeholder objekter i JSON-format
For at konvertere tekststrengen til JavaScript objekter benyttes metoden JSON.parse()
*/
var txtJSON = '{"name":"John", "age":30, "city":"New York"}' //string med et JS objekt i JSON-format
var objJS = JSON.parse(txtJSON);
//console.log(objJS);

var txtJSON = '[{"name":"John", "age":30, "city":"New York"}, {"name":"John", "age":30, "city":"New York"}]' 

/*
Den modsatte vej, er når data i form af JavaScript objekter skal sendes til en webservice. 
Her benyttes JSON.stringify() til at oprette en tekst-streng med objekterne på JSON-format.
*/

txtJSON = JSON.stringify(objJS);
//console.log(txtJSON);




var objJS1 = {name:"John", age:30, city:"New York"}; // JavaScript objekt
//console.log(objJS1.name);

var objJS2 = {'name':"John", 'age':30, 'city':"New York"}; // JavaScript objekt
//console.log(objJS2.name);

var objJS3 = {"name":"John", "age":30, "city":"New York"} //JavaScript objekt i JSON-format
//console.log(objJS3.name);


/// Solution: Exercise (map - 2) ////////////////////////////////////////////////

// Data, fra: http://ergast.com/api/f1/2018/drivers.json?callback=drivers 
var drivers = `[
    {
    "driverId": "grosjean",
    "permanentNumber": "8",
    "code": "GRO",
    "url": "http://en.wikipedia.org/wiki/Romain_Grosjean",
    "givenName": "Romain",
    "familyName": "Grosjean",
    "dateOfBirth": "1986-04-17",
    "nationality": "French"
    },
    {
    "driverId": "hamilton",
    "permanentNumber": "44",
    "code": "HAM",
    "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
    "givenName": "Lewis",
    "familyName": "Hamilton",
    "dateOfBirth": "1985-01-07",
    "nationality": "British"
    },
    {
    "driverId": "hulkenberg",
    "permanentNumber": "27",
    "code": "HUL",
    "url": "http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg",
    "givenName": "Nico",
    "familyName": "Hülkenberg",
    "dateOfBirth": "1987-08-19",
    "nationality": "German"
    },
    {
    "driverId": "kevin_magnussen",
    "permanentNumber": "20",
    "code": "MAG",
    "url": "http://en.wikipedia.org/wiki/Kevin_Magnussen",
    "givenName": "Kevin",
    "familyName": "Magnussen",
    "dateOfBirth": "1992-10-05",
    "nationality": "Danish"
    }    
]`;

//console.log(drivers);
    

//var f1_drivers_string = JSON.stringify(drivers);
//console.log(f1_drivers_string);

var f1Drivers = JSON.parse(drivers);
//console.log(f1Drivers);

var myDrivers= f1Drivers.map(driver =>{return {Kode : driver.code, Fornavn : driver.givenName, Efternavn : driver.familyName }})
//console.log(myDrivers);
    
var myDrivers2 = f1Drivers.map(driver =>{return {'Kode' : driver.code, 'Fornavn' : driver.givenName, 'Efternavn' : driver.familyName }})
//console.log(myDrivers2);

var myDrivers3 = f1Drivers.map(driver =>{return {"Kode" : driver.code, "Fornavn" : driver.givenName, "Efternavn" : driver.familyName }})
//console.log(myDrivers3);


///////////////////// filter ////////////////////////////////////////////////

var navne = ['Henrik', 'Per', 'Anders', 'Peter', 'Poul', 'Ebbe', 'Michael'];
var res = navne.filter(navn => navn.length > 5);

//console.log(res); // expected output: Array ["Henrik", "Anders", "Michael"]


//cars fra opgaven med forEach
/*let cars = [
    {brand: 'VW', model: 'Passat', fuel: 'diesel', owner_tax: 5550 },
    {brand: 'VW', model: 'Passat', fuel: 'gasoline', owner_tax: 460},
    {brand: 'VW', model: 'Passat', fuel: 'hybrid', owner_tax: 150},
    {brand: 'BMW', model: '320i', fuel: 'diesel', owner_tax: 4280},
    {brand: 'BMW', model: '320i', fuel: 'gasoline', owner_tax: 430},
    {brand: 'BMW', model: '320i', fuel: 'hybrid', owner_tax: 210},
    {brand: 'Tesla', model: 'S', fuel: 'electric', owner_tax: 0 }
]*/

let dieselCars = cars.filter(car => car.fuel === 'diesel');
//console.log(dieselCars);


/// Solution: Exercise (filter - 1) ///////////////////////////////////////// 

let hybridCars = cars.filter(car => car.fuel === 'hybrid' && car.owner_tax < 200);
//console.log(hybridCars);


/// Solution: Exercise (filter - 2) ///////////////////////////////////////// 

function fuelCriterium(car, fuel){return car.fuel === fuel;};

let gasolineCars = cars.filter(car => fuelCriterium(car, "gasoline"));
//console.log(gasolineCars);



//////// find, every og some //////////////////////////////////////
// find en benzin bil med en grøn afgift under 450
let gasolineCarLowTax = cars.find(car => car.fuel === 'gasoline' && car.owner_tax < 450);
//console.log(gasolineCarLowTax);

// har alle biler en grøn afgift? 
res = cars.every(car => car.owner_tax > 0);
//console.log(res);

// er der biler med en grøn afgift under 200
res = cars.some(car => car.owner_tax < 200);



//////// filter, map and reduce ////////////////////////////////////

var personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];


//Our objective: get the total score of force users only. Let’s do it step by step!

//First, filter out the personnel who can’t use the force:

var jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;
  });

//console.log(jediPersonnel); // Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)


var jediPersonnel2 = personnel.filter(person => person.isForceUser);  //the same with arrow function
//console.log(jediPersonnel2);


//Next, create an array containing the total score of each Jedi:

var jediScores = jediPersonnel.map(jedi => jedi.pilotingScore + jedi.shootingScore);
//console.log(jediScores); // Result: [154, 110, 156]

  
//Finally, use reduce to get the total:

var totalJediScore = jediScores.reduce(function (acc, score) {
    return acc + score;
  }, 0);
  // Result: 420


//we can chain all of this to get what we want in a single line, 
//and look how pretty it is with arrow functions:

totalJediScore = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);


 var sumJedishootingScore = personnel
    .filter(person => person.isForceUser && person.shootingScore > 60)
    .map(jedi => jedi.shootingScore)  
    .reduce((acc, score) => acc + score, 0);

//console.log(sumJedishootingScore);

/// Solution: Exercise (every - 1) /////////////////////////////////////////
// Have all persons in the array personnel a piloting score greater than or equal to 20?
var pilotingScore20 = personnel.every(person => person.pilotingScore >= 20);
//console.log(pilotingScore20);


/// Solution: Exercise (some - 1) /////////////////////////////////////////
// Are there people in the array of personnel who have a shooting score greater than 80 and who do not use Force?
var shootingScore80 = personnel.some(person => person.shootingScore>80 && !person.isForceUser);
//console.log(shootingScore80);





/////// reduce /////
//reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

var numbers = [10, 20, 30];

res = numbers.reduce(function(sum, number) {    //accumulator: sum, currentValue: number, initialValue: 0 - index og array er ikke benyttet her. 
    sum += number; 
    return sum
}, 0);


res = numbers.reduce((sum, number) => sum += number , 0); //60
//console.log(res);




/// Solution: Exercise (reduce - 1) ///////////////////////////////////////// 
//Use the reduce-method to find the sum of all distance in the array trips and save the result in the variable totalDistance:

var trips = [{distance : 48}, {distance : 12}, {distance : 6}];
var totalDistance = trips.reduce((sum,trip) => sum+=trip.distance, 0);  //reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
//console.log(totalDistance);






/// Solution: Exercise (reduce - 2) ///////////////////////////////////////// 
//Given the code snippet below, - fill in the callback-function to produce the expected result.
//(Hint: remember to return the accumulate object acc)

var desk = [
  {type: 'sitting'},
  {type: 'standing'},
  {type: 'sitting'},
  {type: 'sitting'},
  {type: 'standing'}
];

var deskTypes = desk.reduce((acc, desk) => {
  if (desk.type==='sitting') acc.sitting++;
  if (desk.type==='standing') acc.standing++;
  return acc;
}, {sitting : 0, standing : 0});

//console.log(deskTypes);




///////  Solution: Exercise (reduce/find - 3) ///////////////////////////////////////// 
//Make a function 'unique' that can remove all duplicates from an array.
//For example, given the array [1, 1, 2, 3, 4, 4] the function returns [1,2,3,4]


var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce((acc, item) =>{
    if(!acc.find(priv => priv===item))
      acc.push(item);
    return acc;
  }, []);
}

//console.log(unique(numbers));


/// Solution: Exercise (reduce - 3) /////////////////////////////////////////
/*
Checking if the parentheses are balanced. Note the '!' before 'string.split("")' - it convert number to boolean
Also note 'split' it self, this is because of 'reduce' (just like the other array helpers) only works on one array, so we convert the string to an array of char
Idea: for each "(" count 1 up and for each ")" count one down, check that the number does not become negative e.g. ) ( or ()) (…
*/

function balancedParens(string){
  return !string.split("").reduce((acc, char) => {
    if(acc < 0) {return acc;}                           
    if(char === "(") {return ++acc;}
    if(char === ")") {return --acc;}
    return acc;
  }, 0);
}

/*
console.log(balancedParens("((()))"));
console.log(balancedParens("()())("));
console.log(balancedParens("()()("));
console.log(balancedParens("()())"));
console.log(balancedParens(")("));

var testString = "((()))";
console.log(testString.split(""))
*/