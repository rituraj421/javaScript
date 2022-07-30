let car = {
  name: "rangeRover",
  speed: 300,
  function() {
    console.log(car);
  },
};
console.log(car);

function rr(name, topSpeed) {
  this.name = name;
  this.speed = topSpeed;
  this.run = function () {
    console.log(`${this.name} is running`);
  };
}
car1 = new rr("velar", 300);
console.log(car);
