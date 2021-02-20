
//Object is collection of name/values 
var car = {
    Honda: 2018,
    color: "red",
    model: "accord"
};
//add new properties
car.door = 2;
//delete properties
delete car.door;

console.log("car name", car.model + " " +
 "color", car.color);

 //for loop (variable in object)
 for(x in car){
     var y = car[x];
     console.log(y);
 }

 //Method/function
 var person = {
     firstName: "abir",
     lastName: "yusuf",
     age: 32,
     country: "Bangladesh",

     fullName : function(){
         return this.firstName + " " + this.lastName;
     }
 };

 var x = person.fullName();
 console.log(x)

 var name = {

 };

 name.age = 30;

 name.hello = function(){
     console.log("Hi " + this.age + name.hello)
 }
 name.hello();