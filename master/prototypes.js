console.log("This is tutorial 28");

// Object literal : Object.prototype
let obj = {
    name: "harry",
    nick: "kalu",
    address: "Mars"
}

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("Ram");
console.log(obj2);
 