// variable scope = where variable is accessible

// let = variables are limited to block scope{}
// var = variables are limited to a function(){} 

//global variable = is declared outside anny function
// (if global, var will CHANGE browser's window properties)

var name = "soni";

doSomething();

function doSomething(){
    for(var i=1;i <= 3; i+=1){
        //console.log(i);
    }
}


console.log(i);