
// var name = "abir";

// const rev = name.split("").reverse();

//console.log(r)

var num = [2,4,5,6,7];
var r = num.reverse();
console.log(r);

function revese(str){
   var store = "";
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
         store = element + store
        //console.log(element)
        
    }
    return store;
}
console.log(revese("abir"));