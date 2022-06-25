const name = "ritu";
const greet = "morning";
console.log(greet + ' ' + name);
console.log(name.length);
console.log(name.toUpperCase()); //similarly toLowerCase

console.log(greet[0]); //indexing always starts from 0

console.log(name.indexOf('r'));
console.log(name.charAt('2'));
console.log(name.includes('r'));
console.log(name.substring(0,3));
console.log(name.slice(-2));
console.log(greet.replace('morning','evening'));

//inserting html template in js
let fruit1 = 'orange';
let fruit2 = 'mango';
let neme = `Hey ${name}
        <h1> Nameste </h1>
        <p> You like ${fruit1} but not ${fruit2}`;

        document.body.innerHTML = neme;