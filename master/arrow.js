// creating a regular function
const ritu = function () {
  console.log("hey, hello");
};
ritu();

//arrow function
const rituraj = () => {
  console.log("Hey, hllo");
};
rituraj();

//
const greet = () => {
  return "good night";
};
console.log(greet());

//alternate method

const greeet = () => "Good night";

console.log(greet());

//advance (for multiple arguments we require parenthesis)
const greeeet = (name, ending) => "Good morning" + name + ending;

console.log(greeeet(' rituraj', ' bye'))
