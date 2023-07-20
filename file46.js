/* nested functions = Functions inside other functions.
                      Outer functions have access to inner functions.
                      Inner functions are "hidden" from outside the outer functions.
                      used in closures.
*/

let userName = "Bro";
let userInbox = 0;

login();
// displayUserName();
// displayUserInbox();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}
// function displayUserName(){
//     console.log(`Welcome ${userName}`);
// }

// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messages`);
// }