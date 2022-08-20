const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates ritu object
let ritu = Object.create(proto);
ritu.name = "ritu";
ritu.role = "Programmer";
// ritu.changeName("ritu2")
// console.log(ritu)

// This also creates ritu object
const ritu1 = Object.create(proto, {
    name: { value: "ritu", writable: true },
    role: { value: "Programmer" },
});
ritu1.changeName("ritu2")
// console.log(ritu1)


// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let rituObj = new Employee("ritu", 345099, 87);
console.log(rituObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 0, "Javascript");
console.log(rohan);


