
function checkVowel(str){
    var first = str.toLowerCase().charAt(0);

    if (first === "a" || first === "e" || first === "i" || first === "o" || first === "u") {
        return "They first letter is vowel";
    }
    else {
        return "No, The first letter is not vowel";
    }
}
var vow = checkVowel("yusuf")
console.log(vow)

function countVowel(word){
    var arr = word.split("")
    var res = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i].toUpperCase();
        if (element === "A" || element === "E" || element ==="I" || element ==="0" || element ==="U") {
            res +=1;
        }
        
    }
    return res
}
var y = countVowel("abir YUSUF");
console.log(y);