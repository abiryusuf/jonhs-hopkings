name = "abir yusuf";

//console.log(name);

function myFunction(){
    console.log(name);
    local();
    global();
}
myFunction();


function local(){
    var carName = "Honda"
    console.log(carName);
}

local();

var x = 2;
function global(z){
     var y = 10;
    console.log (x + y + z)

}

//console.log(global(5));