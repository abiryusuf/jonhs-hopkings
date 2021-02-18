
//Object is collection of name/values 
var car = {
    Honda: 2018,
    color: "red",
    model: "accord"
};
//add new properties
car.door = 2;

console.log("car name", car.model + " " +
 "color", car.color);

 //for loop (variable in object)
 for(x in car){
     var y = car[x];
     console.log(y);
 }