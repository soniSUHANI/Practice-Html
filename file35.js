//spread operator = allows an iterable such as an 
//...                 array or string to be expanded
//                   in places where zero or more
//                   arguments are expected
//                   (unpacks the elements)


let userName = "soni suhani";
let numbers = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers);
console.log(...userName);
let maximum = Math.max(...numbers);
console.log(maximum);


let class1 = ["sakshi","anisha","kavya"];
let class2 = ["shruti","anirudh","shivam"];
class1.push(...class2);

console.log(...class1);