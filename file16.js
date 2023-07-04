// switch = statement that examine a value
//          for a match against any case clauses
//          More efficient than many "else if" statements

let grade = window.prompt("Enter your grade: ");

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed ... barely");
        break;
    case "F":
        console.log("You failed!");
    default:
        console.log(grade,"is not a letter grade!");

}