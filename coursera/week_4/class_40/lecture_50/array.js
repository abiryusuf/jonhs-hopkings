var array = new Array();

array[0] = "Abir";
array[1] = 2;
array[2] = function(name){
    console.log("Hello " + name);
}

array[3] = {
    course: "HTML, CSS and JS"
};

console.log(array);

array[2](array[0]);