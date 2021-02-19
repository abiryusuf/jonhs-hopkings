
function Person(first, last, age, eyecolor){

    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    //add new property
    this.language = "English";

}
// add new function by prototype 
//prototype allows to add new properties and methods to object constructors
Person.prototype.name = function(){
    return this.firstName + " " + this.lastName;
}

var info = new Person("abir", "yusuf", 32, "Brown");
console.log(info.name(), info);