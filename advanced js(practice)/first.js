document.write(1 + 2); //Using document.write() after an HTML document is loaded, will delete all existing HTML:
// this methos should only be used for testing purpose

console.log(1 + 2); // it will give the sum

let x, y, z; // Statement 1
x = 5; // Statement 2
y = 6; // Statement 3
z = x + y;
console.log(z);

// alert(10 * 5);

// alert(10 / 2);

// alert(15 % 9);

x = 10;
y = 5;
x += y;

console.log(x);

//js data types
let q = 16 + 4 + "Volvo";
console.log(q);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person);

typeof ""; // Returns "string"
typeof "John"; // Returns "string"
typeof "John Doe"; // Returns "string"
car = undefined;
console.log(typeof car);

const w = {
  firstName: "John",
  lastName: "Doe",
};
console.log(typeof w);

//js Functions
function myFunction(p1, p2) {
  return p1 * p2; // The function returns the product of p1 and p2
}
myFunction(3, 4);

let r = myFunction(4, 3); // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b; // Function returns the product of a and b
}

// function myFunction() {
//     alert("Hello World!");
//   }
//   myFunction();

//JS OBJECTS
//1
const caar = {
  type: "Fiat",
  model: "500",
  color: "white",
};
console.log(caar.type);

//2
const parson = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(parson);
console.log(parson.age);

//3
const perrson = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    // return this.firstName + " " + this.lastName;
  },
};
console.log(perrson.firstName + " " + perrson.lastName);

//4
const rituraj = {
  name: "ritu",
  age: 20,
};
// alert(rituraj.name + rituraj.age)

//JS EVENTS
function displayDate() {
  document.getElementById("ritu").innerHTML = Date();
}

//js strings
let text = "John Doe";
console.log(text);

//let textt = "We are the so-called "Vikings" from the north.";//not possible
let textt = 'We are the so-called "Vikings" from the north.'; //for double quote
console.log(textt);

let texxt = "It's alright."; // for single quote
console.log(texxt);

let txt = "Hello World!";
let b = txt.length;
console.log(b);
// alert(b);

let str1 = "Hello ";
let str2 = "World!";
// alert(str1 + str2);
console.log(str1 + str2);

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13); //including 7 and excluding 13
console.log(part); //index always starts from zero, here "A" is at 0th position

let strr = "Apple, Banana, Kiwi";
let parrt = str.slice(-12, -6); //last index starts from -1, here "-12" included and "-6" is excluded
console.log(parrt);

let sstr = "Apple, Banana, Kiwi";
let ppart = str.substring(7, 13);
console.log(ppart);

let sttrr = "Apple, Banana, Kiwi";
let parrtt = str.substr(7, 6);
console.log(parrtt);

let ssstr = "Apple, Banana, Kiwi";
let pppart = str.substr(7);
console.log(pppart);

let ttext = "Please visit Microsoft!";
let newText = ttext.replace("Microsoft", "Home");
console.log(newText);

let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //converts the string to Upper case
console.log(text2);

let textt1 = "Hello World!";
let textt2 = text1.toLowerCase(); //converts the string to lower case
console.log(textt2);

let text11 = "Hello";
let text22 = "World";
let text3 = text11.concat(" ", text22, " ", textt1); //adds the strings
console.log(text3);

let teext1 = "      Hello World!      ";
let teext2 = teext1.trim(); //trim removes the white space
console.log(teext2);

let text111 = "     Hello World!     ";
let text222 = text1.trimStart(); //removes the white space from start
console.log(text22);

let texxt1 = "     Hello World!     ";
let texxt2 = text1.trimEnd(); //removes the white space from end
console.log(texxt2);

let taxt = "5";
let padded = taxt.padStart(2, "x");
console.log(padded);

let me = "Please locate where 'locate' occurs!";
me.search("locate"); //returns the position of match
console.log(me.search("locate"));

let mee = "The rain in SPAIN stays mainly in the plain";
mee.match(/ain/g);
console.log(mee.match(/ain/g));

let ext = `Hello World!`; //here we RE USING BACKTICS TO DEFINE A STRING
console.log(ext);

let eext = `He's often called "Johnny"`; //With template literals, you can use both single and double quotes inside a string:
console.log(eext);

let eeext = `The quick
brown fox
jumps over
the lazy dog`; //Template literals allows multiline strings:
console.log(eeext);

let firstName = "John";
let lastName = "Doe";

let next = `Welcome ${firstName}, ${lastName}!`; //Template literals allow variables in strings:
console.log(next);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
//JS STRINGS ENDS HERE

//JS ARRAYS starts here
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

const carss = []; //here we first created array and then assigned values
carss[0]= "Saab";
carss[1]= "Volvo";
carss[2]= "BMW";
console.log(carss);

const ccars = ["Saab", "Volvo", "BMW"];
ccars[0] = "Opel";//it will insert ope1 at 0th index
console.log(ccars);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(fruits)
console.log(length)

const pearson = [];
pearson[0] = "John";
pearson[1] = "Doe";
pearson[2] = 46;
pearson.length;    // Will return 3
pearson[0];        // Will return "John"
console.log(pearson)

const peerson = [];
peerson["firstName"] = "John";
peerson["lastName"] = "Doe";
peerson["age"] = 46;
peerson.length;     // Will return 0
console.log(peerson[0]);         // Will return undefined

const ffruits = ["Banana", "Orange", "Apple", "Mango"];
ffruits.pop(); //it will remove last element from array
console.log(ffruits)

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.push("Kiwi");//it will the element at 0th index
console.log(fruitss)

const frruits = ["Banana", "Orange", "Apple", "Kiwi"];
frruits.splice(1, 2);
console.log(frruits)

const fruuits = ["Banana", "Orange", "Apple", "Mango"];
fruuits.sort();//sort() method sorts an array alphabetically:

console.log(fruuits)

const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b})); //for sorting in ascending order

const ppoints = [40, 100, 1, 5, 25, 10];
ppoints.sort(function(a, b){return b - a});//for sorting in descending order

const pointss = [40, 100, 1, 5, 25, 10];
console.log(pointss.sort(function(){return 0.5 - Math.random()}));

const numbers = [45, 4, 9, 16, 25];
let txxt = "";
numbers.forEach(myFunction);//it's basically a js callback function

function myFunction(value, index, array) {
  txxt += value + "<br>";
}

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
const a = ("Arrays Ended")
console.log(a)
// JS ARRAYS ENDS HERE

//JS DATES STARTS HERE
const ab = ("Dates Started")
console.log(ab)

const d = new Date();
console.log(d)

const dd = new Date(2018, 11, 24, 10, 33, 30, 0); //here we specified our own date and time 
console.log(dd)

const ddd = new Date(2018, 11);//two humbers specify year and month
console.log(ddd)

const dddd = new Date(0);//Using new Date(milliseconds), creates a new date object as January 1, 1970, 00:00:00 Universal Time (UTC) plus the milliseconds:
console.log(dddd)

const dddddd = new Date();
dddddd.toString(); //returns a string
console.log(dddddd)

const d1 = new Date();
console.log(d1.getTime())

const da = ("JS DATES ENDS HERE")
console.log(da)

//JS MATH OBJECT STARTS HERE
const ma = ("MATH OBJECT STARTS HERE")
console.log(ma)

console.log(Math.round(4.6)); //it will roundoff and return 5

Math.ceil(4.9);
Math.ceil(4.7);
Math.ceil(4.4);
console.log(Math.ceil(4.2)); //here also it will roundoff to 5 only ,

console.log(Math.floor(4.9)); //here it will roundoff to 4
Math.floor(4.7);
Math.floor(4.4);
Math.floor(4.2);
Math.floor(-4.2);

console.log(Math.sign(-4))//it will return the sign of the number

console.log(Math.pow(8, 2)); //returns the power of x wrt y(here x = 8 and y =2 i.e 8**2)

console.log(Math.abs(-4.7));// returns the absolute(positive) value 

console.log(Math.sqrt(64)); // returns the square root of x

console.log(Math.random()); //returns a random value between 0 and 1

console.log(Math.floor(Math.random() * 10)); // Returns a random integer from 0 to 9:

//js conditionals
const c = ("JS CONDITRIONALS STARTS HERE")
console.log(c)

if (new Date().getHours() < 18) {
  console.log("Good Morning ")
}
else{
  console.log("Good night")
}

//js switch statements
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is "+ day)

switch(fruits) {
  case "Banana":
    alert("Hello")
    break;
  case "Apple":
    alert("Welcome")
    break;
  
default:

    //alert("Neither"); 
}

//JS LOOPS
const l = ("Loops starts here")
console.log(l)

for (let i = 0; i < 5; i++) {
  + "<br>"
  console.log(text += "The number is " + i );
}

let i;
for(i= 0; i < 10; i++) {
  console.log(i);
}

const frrruits = ["Apple", "Banana", "Orange"];
for (g of frrruits) {
  console.log(g);
}

//for in loop
const pserson = {fname:"John ", lname:"Doe ", age:25};

let tcext = "";
for (let x in pserson) {
  console.log(tcext += pserson [x]);
}

//while loop
let k = 0;
while (k < 10) {
  console.log(k);
  k++
}

//loop break

for (let z = 0; z < 10; z++) {
  if (z === 3) { break; } //it will break at 3
  console.log(z)
}

//loop continue

for (let n = 0; n < 10; n++) {
  if (n === 3) { continue; } //it will not print 3 and rest all will be printed
  console.log(n)
}
