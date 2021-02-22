// (function(name){
//     console.log("Hello ", name)
// })("Abir");

// //object
// var info = {

// };

// //create a new obeject properties 
// info.name = "Yusuf";
// var greeting = "Hello ";

// //create new function
// name.myFunction = function(){
//     console.log(greeting + info.name);
// }

(function(window) {
     
      var obj = {};
    
      obj.dreamOn = function () {
       console.log("I want to see the global scope! Let me out!");
      };
    
      window.doer = obj;
     
     });
    
     doer.dreamOn()