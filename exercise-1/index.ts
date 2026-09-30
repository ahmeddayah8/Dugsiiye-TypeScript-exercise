// Declare Variables with Explicit Types 
let productName: string = "Laptop";
let price: number = 500;
let discountAvailable: boolean = true;


//  Fix this Broken JavaScript 
function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

console.log(getDiscount(100, 0.2));


// Dangerous 
function printLength(x: unknown): void {
  if (typeof x === "string") {
    console.log(x.length);
  } else {
    console.log("Value must be a string");
  }
}

printLength("Hello");
printLength(123);