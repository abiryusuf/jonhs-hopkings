// var array = new Array();

// array[0] = "Abir";
// array[1] = 2;
// array[2] = function(name){
//     console.log("Hello " + name);
// }

// array[3] = {
//     course: "HTML, CSS and JS"
// };

// console.log(array);

// array[2](array[0]);

// var name = ["Abir", "Yusuf", "Mim"];
// //name = "Madiha";
// for (let i = 0; i < name.length; i++) {
//     const element = name[i];
//     console.log(element);
    
// }

// name [4]= "Madiha";

// for(var x in name){
//     console.log("Hello", name[x])
// }

// var counter = 0;

// var myArray = ["Abir", 4, {
//     handle: 
//     "abir yusuf"
// }];

// for (let i = 0; i < myArray.length; i++) {
//     counter++
    
// }
// console.log(counter);

var g = [1,3,3,4,4,5,5,10];

//console.log(g)
function duplicate(num){
  var currentNum = [];
  for (let i = 0; i < num.length; i++) {
      const element = num[i];
      var index = currentNum.indexOf(element);
      if (index ===-1) {
          currentNum.push(element)
      }
      //console.log(index);
      //return currentNum
  }
  return currentNum;
}


console.log(duplicate(g));