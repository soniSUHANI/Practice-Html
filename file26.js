//ternary operator = shortcut for an 'if/else statement' 
//                   Takes 3 operands

//                   1. a  condition with ?
//                   2. expression if True ;
//                   3. expression if false


// condition ? experIftrue : exprIfFalse

let adult = checkAge(21);
console.log(adult);

function checkAge(age){

    return age >= 18 ? true : false;

}