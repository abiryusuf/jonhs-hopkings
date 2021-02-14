
// function checkVowel(str){
//     var first = str.toLowerCase().charAt(0);

//     if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
//         return "They first letter is vowel";
//     }
//     else {
//         return "No, The first letter is not vowel";
//     }
// }
// var vow = checkVowel("yusuf")
// console.log(vow)

// function countVowel(word){
//     var arr = word.split("");
//     var res = 0;

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         // if (element === "A" || element === "E" || element ==="I" || element ==="0" || element ==="U") {
//         //     res +=1;
//         // }
//         //element ++;
//         return element
//         //console.log(element)
//         //res = element + 1
//     }
//     //return res;
// }
// var y = countVowel("abir YUSUF");
// console.log(y);

// //name = abir yusuf

// var nameInfo = "abir yusuf";
// //console.log(nameInfo.split(" "))

// function ac(str){
//     var arr = str.split(" ");
//     var res = "";
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         res += element[0].toUpperCase()
//     }
//     return res;
// }

//
var name = "abir yusuf";
console.log(name.split(""));

function countVowel(value){
    var arr = value.split("");
    var res = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].toLowerCase();
        //console.log(element)
        if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u") {
            res += 1
        }
        
    }
    return res;
}
console.log(countVowel(name));

//Acronym

var cloud = "amazon web services";

console.log(cloud.split(" "));

function acronym(str){
    var arr = str.split(" ");
    var res = "";

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        res = element[0].toUpperCase();
        
    }
    return res;
}

console.log(acronym(cloud));