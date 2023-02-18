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

//Shows error
//let sales: number = 123_424_125;
let sales = 123_424_125; // knows its a number
//let code: string = "Typescript";
let code = "Typescript"; // knows its a string
let is_published: boolean = true;
let level; // type any (no predefined type)
level = 1;
level = "a";

function render(document: any) {
    console.log(document);
}

//tsconfig - changed noImplicityAny to false
//function render(document: any) {
//     console.log(document);
// }

/**************** Arrays *******************/

//JS array
let numbers_js = [1, 2, 3, 'a']; //can include strings with numbers in array 

//TS Array
let numbers: number[] = [1, 2, 3, 4]; // number array, error if non integer is in array

//numbers.forEach(n => n.toExponential) // n. -> will display code hints - example here toExponential


/*********** Tuples ************/


