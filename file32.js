//array = think of it as a variable
//        that can store multiple values

let fruits = ["apple","orange","banana"];

//fruits[0] = "coconut";

fruits.push("lemon");  //add an element
fruits.pop(); //removes last element 
fruits.unshift("mango");//add element to begining
fruits.shift();  //removes element from begining

let length = fruits.length;
let index = fruits.indexOf("apple");


console.log(index);