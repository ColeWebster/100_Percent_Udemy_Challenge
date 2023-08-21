/*
Lexical scope (Static)
Global scope - Defined outside of all code blocks
Local scope - Defined inside a code block

In a scope you can access vairables defined in that scope or in any parent/ancestor scope

On this page currently:
    Global
        Local
            Local
        Local

*/

// Global scope
let varOne = "varOne";

if (true) {
  console.log(varOne);
  // Local scope
  let varTwo = "varTwo";
  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  // Local scope
  let varThree = "varThree";
}

console.log(varTwo);
// Prints undefined because the scope of varTwo is limited to the if statement.
