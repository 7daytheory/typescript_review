"use strict";
let sales = 123424125;
let code = "Typescript";
let is_published = true;
let level;
level = 1;
level = "a";
function render(document) {
    console.log(document);
}
let numbers_js = [1, 2, 3, 'a'];
let numbers = [1, 2, 3, 4];
let user = [1, "Mosh", true, 1];
user.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
;
let myNewSize = 2;
function CalculateTax(income) {
    if (income < 50000)
        return income * 1.2;
}
function CalculateTax2(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
CalculateTax2(10000);
let employee = { id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    }
};
employee.name = "Matt";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
//# sourceMappingURL=scripts.js.map