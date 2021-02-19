
function makeAdd(add){
    var myFun = function(x){
        return add * x;
    }
    return myFun;
}
var result = makeAdd(10);
console.log(result(10));

var x = 5;
var y = x;
x = 10;
//y = x;
console.log(y);