//local storage

localStorage.setItem('Name', 'ritu');

//localStorage.clear(); //clears the local storage and gives null

// localStorage.removeItem('Name'); //removes a specific item

let name = localStorage.getItem('Name');
console.log(name);

let sabji = ['aaloo', 'pyaz', 'nimbu', 'loki'];
localStorage.setItem('SSabji', sabji);
// localStorage.setItem('SSabji', JSON.stringify(sabji)); //will be converted to string
// alse use JSON.parse

console.log(sabji);

// session storage

sessionStorage.setItem('Name', 'ritu');

//localStorage.clear(); //clears the local storage and gives null

// localStorage.removeItem('Name'); //removes a specific item

let namee = sessionStorage.getItem('Name');
console.log(namee);