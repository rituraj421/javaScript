class Employee{
    constructor(givenName, givenExp, givenDiv){
        this.name = givenName;
        this.experience = givenExp;
        this.dividion = givenDiv;
    }
    
    slogan(){
        return `I am ${this.name} and you are best `;
    }

    joiningYear(){
        return 2020 - this.experience;
    }
}
class Programmer extends Employee{
    constructor(givenName, givenExp, givenDiv, language){
        super(givenName, givenExp, givenDiv);
        this.language = language;
    }
}
raj = new Programmer("raj", 3, "a", "js")
ritu = new Employee("rituraj", 3, "A");
console.log(ritu.joiningYear);
console.log(raj);
