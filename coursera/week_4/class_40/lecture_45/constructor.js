
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
    return this.firstName + " " + this.lastName;
}

var info = new Person("abir", "yusuf", 32, "Brown", "English");
console.log(info.name(), info);