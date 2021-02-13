function myFunction(a,b){
    return a * b;
}

var x = myFunction(3,4).toString();

console.log(x);

//check string
function isString(x, y, z){
    if(typeof x === "string" && typeof y === "string" && typeof z === "string"){
        return "They are the string";
    } else{
        return "They are not string";
    }
}

var str = isString("abir", "madiha", "mim");
console.log(str);

var y = "avir"
console.log(y.charAt(2));