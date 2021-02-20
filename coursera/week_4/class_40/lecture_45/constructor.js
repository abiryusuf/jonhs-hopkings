
function Person(first, last, age, eyecolor){

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    //add new property
    this.language = "English";
    // this.name = function(){
    //     return this.firstName + " " + this.lastName;
    // }

}
// add new function by prototype 
//prototype allows to add new properties and methods to object constructors
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName + " " + this.age;
}

var info = new Person("abir", "yusuf", 32, "Brown", "English");
console.log(info.name(), info);
//info.name();

var literalCircle = {
    radius: 10,
    getArea: function(){
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};
// literalCircle.prototype.getArea = function(){
//     console.log(this);
//     return Math.PI * Math.pow(this.radius, 2);
// }
var x = literalCircle.getArea();
console.log(x)

function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.bark = function () {
    console.log(this.name + " likes barking! Bark!");
  }
  
  var max = new Dog("Max", "Buddy");
  
  max.bark();