let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);
// console.log(cont);

// Node types
// 1. Elements
// 2. attribute
// 3. tex tnode
// 8 . comment
// 9 . document
// 10. doctype

let container = document.querySelector('div.container');
console.log(container);
console.log(container.childNode);
console.log(container.children);
console.log(container.firstChild);
console.log(container.firstElementChild);
console.log(container.childElementCount);