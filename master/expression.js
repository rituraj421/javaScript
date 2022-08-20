let reg = /rituraj/g; //this is a regular expression literal in js , g is global , remove it and then run 
console.log(reg)
console.log(reg.source);

let r = " rituraj js playlist rituraj";

let result = reg.exec(r);
console.log(result);
result = reg.exec(r);
console.log(result);
result = reg.exec(r);
console.log(result);
// console.log(result.input);
// console.log(result.index);

let result2 = reg.test(r);
console.log(result2)

let result3 = r.match(reg)
console.log(result3)

//metacharacters
let regex = /ritu/;

regex = /^r/; //matches if string starts with r

regex = /u?$/; // matches if string ends with u?

let str = "r hey it's me ritu ,and U?";

let result4 = regex.exec(str);

console.log("the result is", result4);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`the string ${str} does not match the expression ${regex.source}`);
}


//regular expression character set
