let element = document.createElement("li");
// console.log(element);

let text = document.createTextNode("dnbshjvsd sdfbdsj sd");
element.appendChild(text);


// adding a className
element.className = "ritu";
element.id = "ratu";
element.setAttribute("title", "mytitle");
// element.innerHTML = "hey, thats me";
let ul = document.querySelector("ul.this");
// ul.appendChild(element);
console.log(ul);
console.log(element);


let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let nodee = document.createTextNode("text node for elem2");
elem2.appendChild(nodee);
elem2.removeAttribute('id');
console.log(elem2);
element.replaceWith(elem2);

