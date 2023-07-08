// Template literals = delimited with (`)
//                     instead of double or single quotes
//                     allows embedded variables and expressions


let username = "soni";
let items = 3;
let total = 75;

// console.log("Hello",username);
// console.log("You have", items,"items in your cart");
// console.log("Your total is $", total);

// console.log(`Hello ${username}`);
// console.log(` You have ${items} items in your cart`);
// console.log(`your total is $ ${total}`);

let text = 
`Hello ${username}<br>
You have ${items} items in your cart<br>
your total is $ ${total}<br>`;

//console.log(text);

document.getElementById("myLabel").innerHTML = text;