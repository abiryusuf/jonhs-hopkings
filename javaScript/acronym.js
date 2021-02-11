

var name = "Abir Yusuf";

const res = name.split(" ");

console.log(res)

function acronym(str){
    var arr = str.split(" ");

    var result = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result += element[0].toUpperCase();

        //console.log(element)
        
    }
    return result;
}
var info = "abir yusuf mim";
var res1 = acronym(info);
console.log(res1);