
// var name = "Abir";

// function sayHello(){
//     console.log("Hello " + name);
// }

// var yusufGreeter = {}

// yusufGreeter.name = "Yusuf";

// var greeting = "Hi "
// yusufGreeter.sayHi = function(){
//     console.log(greeting + yusufGreeter.name);
// }

(function(window){
    var yusufGreeter = {};

    yusufGreeter.name = "Yusuf";
    
    var greeting = "Hi "
    yusufGreeter.sayHi = function(){
        console.log(greeting + yusufGreeter.name);
    }  
    window.yusufGreeter = yusufGreeter
})(window);