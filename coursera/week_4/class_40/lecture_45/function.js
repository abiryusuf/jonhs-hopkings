
function makeAdd(add){
    var myFun = function(x){
        return add * x;
    }
    return myFun;
}
var result = makeAdd(10);
console.log(result(10));