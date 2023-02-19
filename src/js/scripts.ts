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
// 1, Mosh
let user: [number, string, boolean, number] = [1, "Mosh", true, 1]; //Lets array know to expect 1 number and 1 string

//let userFail: [number, string] = [1, "Mosh", 2, 'fail']; // too many values - error

//let userFail2: [string, number] = [1, 'String']; //Expecting String and then a number - order matters 

user.push(1); // This will still work and not cause an error even though we don't identify type

//console.log(user);

/************** Enums ***************/
// const small = 1;
// const medium = 2;
// const large = 3;

//PascalCase
enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
 
/* Creates this code as output
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
*/

//const enum [var] outputs cleaner code
const enum newSize { Small = 1, Medium, Large };
let myNewSize: newSize = newSize.Medium;

//Outputs optimized code :
//let myNewSize = 2;
//console.log(myNewSize);
//# sourceMappingURL=scripts.js.map

/************** Functions ****************/

function CalculateTax(income: number): any {
    //return 'a'; automatically get error bc string not a number
    if(income < 50_000)
    return income * 1.2;
    //returns undefined by default - so getting error message if you have number where any is assigned currently
}

//Assigning number value - as long as a number will be returned no matter what - taxYear isn't required bc it's given a default of 2022
function CalculateTax2(income: number, taxYear = 2022): number {
    if(taxYear < 2022)
    return income * 1.2;
    return income * 1.3;
}

//Since taxYear is optional (taxYear?) - won't cause error if you don't send value
CalculateTax2(10_000);

//function CalculateTax2(income: number, taxYear?: number): number { }  - Makes taxYear optional and will be undefined

/********************** Objects *****************/

//You can make name optional - but doesn't make sense so set it to '' to avoid error
// let employee: {
// readonly id: number,
// name: string,
// retire: (date: Date) => void
// } = {id: 1, 
//     name: '',
//     retire: (date: Date) => {
//         console.log(date)
//     }
// };
// employee.name = "Matt";

//employee.id = 0; readonly makes this value not editable

/******************* Advanced Types *************/

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

//Unlike in previous section - define an object (Employee) with all the predfined types and call the Employee
//Much cleaner also
let employee: Employee = {id: 1, 
        name: '',
        retire: (date: Date) => {
            console.log(date)
        }
    };
    employee.name = "Matt";

    /***************** Union Types *************/

    //Give a var or function paramter more than 1 type

    function kgToLbs(weight:number | string): number {
        if(typeof weight === 'number') 
            return weight * 2.2;
            else
            return parseInt(weight) * 2.2;
    }

    kgToLbs(10);
    kgToLbs('10kg');

    /********** Intersection Types ***********/

    //All intersection types
    type Draggable = {
        drag: () => void
    }

    type Resizable = {
        resize: () => void
    }

    //new intersection types that's draggable and resizable
    type UIWidget = Draggable & Resizable;

    let textBox: UIWidget = {
        drag: () => {},
        resize: () => {}
    }

    /************* Literal Types ************/
    //Literal (exact, specific)
    //let quantity = 50; // it can ONLY be set to 50
 
    type Quantity = 50 | 100;
    let quantity: Quantity = 100;

    type Metric = "cm" | "inch";

