// functions = Define code once, and use it many times.
//             to perform same code ,call the function name.

startProgram();

function startProgram(){
    let userName = "soni";
    let age = 19;

    happyBirthday(userName,age);

}

function happyBirthday(userName,age){
    console.log("Happay birthday to you!");
    console.log("Happay birthday to you!");
    console.log("Happy birthday dear",userName);
    console.log("Happy birthday to you!");
    console.log("You are",age,"years old");
}