
let a;
let b;
let c;

// a = windows.prompt("Enter side A");
// a = Number(a);

// b = windows.prompt("Enter side B");
// b = Number(b);

// c = Math.sqrt(Math.pow(a, 2) + Maths.pow(b, 2));

// console.log("side c: ",c);

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Maths.pow(b, 2));

    document.getElementById("cLebel").innerHTML = "side c: " + c;
}