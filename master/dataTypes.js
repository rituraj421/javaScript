//primitive and reference data types
// primitive
//   String
//   numbers
//   Boolean
//   undefined
//   symbol
//   null

// reference data SVGUnitTypes
//   functions
//   Dates
//   arrays
//   Objectliterals

//strings
var name = 'ratu';
console.log(name + " is a string");
console.log("data type is " + (typeof name));

//numbers
let num = 20;
console.log("data type is " + (typeof num));

let ritu = false;
console.log("data type is " + (typeof ritu));

//null
let nulll = null;
console.log("data type is " + (typeof nulll));

//undefined
let undef = undefined;
console.log("data type is " + (typeof undef));

//reference data type
arrr = [1,2,3,4,5,6, false, "ritu", undefined];
console.log("data type is " + (typeof arrr));

let marks = {
    niki : 3,
    ritu: 2
}
console.log(marks)
console.log("data type is " + (typeof marks));

function neme(){

}
console.log(typeof neme);

let date = new Date();
console.log(typeof date);