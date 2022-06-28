// single element DOM selector
let element = document.getElementById("heading");
// console.log(element);

// element = element.childNodes;
// element = element.parentNode;
element = element.className;
// console.log(element);

let sel = document.querySelector('#heading');
sel = document.querySelector('.child');
// console.log(sel);

// multiline selector

let elem = document.getElementsByClassName('child');
console.log(elem[3]);