// while loop = repeat some code
//              while some condition is true
//              potentially infinite

let userName = "";

while(userName== "" || userName == null){
    userName = window.prompt("Enter your name");

}

console.log("Hello" , userName);

while(1==1){
    console.log("HELP! I AM STUCK IN THE INFINITE LOOP!")
}