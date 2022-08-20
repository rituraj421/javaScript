async function ritu(){
    const response = await fetch('https://api.github.com/users');
    console.log('before response')
    const users = await response.json();
    console.log("resolved")
    return users;

    return "ritu";
}
console.log("Before calling ritu")
let a = ritu();
console.log("After calling ritu")
console.log(a)
a.then(data => console.log(data))