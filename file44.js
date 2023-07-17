// arrow function = compact alternative to a traditional function expression 
//   =>

// const greetings = function(username){
//     console.log(`Hello ${username}`);
// }

const greetings = (username) => console.log(`Hello ${username}`);

greetings("Mommy");

// const percent = function(x, y){
//     return x/y * 100;

// }
// console.log(`${percent(85,100)}%`)

const percent = (x, y) => x/y *100; 

console.log(`${percent(56,160)}%`);

let grades = [100,50,90,60,80,70];

// grades.sort(descending);
// grades.forEach(print);


// function descending(x, y){
//     return y-x;
// }

// function print(element){
//     console.log(element);
// }


// grades.sort()

grades.sort((x, y) => y-x);
grades.forEach((element)=>console.log(element));

