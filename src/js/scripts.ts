//Custom Js

/* Statically Typed (C++ , C+ , Java)
int number = 10;
number = "a"; Causes Error obviously

Dynamically Typed (Javascript, Python, Ruby)
let number = 10;
number = "a"; // No Error - determines variable type at runtime
Math.round(number) // Would then cause an error since the number is now a string

//Typescript
let x; number = 10;
x = "a"; // Typescript would catch this error

//Javascript with Typescript Benefits
Static Typing
Code Completion
Refactoring
Shorthand Notations

//Drawbacks with Typescript
Compilation (Browsers don't understand typescript yet)
    -Transpilation => .ts -> Compiler -> .js


*/

console.log('testing');

//Shows error
let age: number = 20;
 //age = "a"; shows error
age = 25;
