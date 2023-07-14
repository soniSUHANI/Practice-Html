// How to accept user input

// Easy way with a window prompt

//let username = window.prompt("what's your name?");
// console.log(username);

// DIFFICULT WAY HTML textbox

let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLebel").innerHTML = "Hello " + username;

}
