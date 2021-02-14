
//num = 5;

function factorial(num){
    var res = 1;
    for(let i = 0; i<num; i++){
        res += num * i
    }
    return res;
}
console.log(factorial(5));