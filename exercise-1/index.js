"use strict";
// Declare Variables with Explicit Types 
let productName = "Laptop";
let price = 500;
let discountAvailable = true;
//  Fix this Broken JavaScript 
function getDiscount(price, discount) {
    return price - price * discount;
}
console.log(getDiscount(100, 0.2));
// Dangerous any 
function printLength(x) {
    if (typeof x === "string") {
        console.log(x.length);
    }
    else {
        console.log("Value must be a string");
    }
}
printLength("Hello");
printLength(123);
