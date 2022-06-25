let varr = 19; //now it's a number 
console.log(varr, (typeof varr));

let varrr = "19"; // now it's a string
console.log(varr, (typeof varrr));

let varrrr = String(19);
console.log(varr, (typeof varrrr));

let number = parseInt('19');
console.log(number, (typeof number));

//Coercion
let strr = 19;
let strrr = "19";
console.log(strr + strrr); //it convers number to strings and then reurns
