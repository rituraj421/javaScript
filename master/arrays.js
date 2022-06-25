let nums = [1,3,4,5,7,];
const strs = ['me', 'u', 'n', 'ni'];
const mixed = ['str', 65, [3,5]];

const arr = new Array(3,4, 'orange');
console.log(arr);
console.log(strs);
console.log(mixed);
console.log(nums);

console.log(arr.length);

arr[0] = 'ritu';
console.log(arr);

nums.push(33);  //push at the end 
nums.unshift(11); //inserts at the begining
nums.pop(); //removes the end element
nums.shift(); //removes from starting
nums.splice(1,3)  //
nums.reverse();
console.log(nums);

let num1 = [5,5,5,5,5];
num2 = nums.concat(num1)
console.log(num2);

//objects

let myselff = {
    name : 'ritu',
    place : 'unknown',
    level : [0,0,0]
}
console.log(myselff);
console.log(myselff.name);