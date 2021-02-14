
var number = [1,4,4,5,1,2,2,7,6];
//console.log("number",number.indexOf(10))

function duplicateNum(num){
 let current = [7];

    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        var index = current.indexOf(element)
        if(index === -1){
            current.push(element)
        }
        //console.log(index)
        
    }
    return current;
}

console.log(duplicateNum(number));