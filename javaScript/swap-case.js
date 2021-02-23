var swapCase = function(str){

    var result = "";

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];

        if (letter === letter.toUpperCase()) {
            result += letter.toLowerCase();
        }else{
            result += letter.toUpperCase()
        }
        
    }
    return result;
}
console.log(swapCase("ABIR YUSUF"));