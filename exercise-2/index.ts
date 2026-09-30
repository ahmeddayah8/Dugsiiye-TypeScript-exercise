
// Exercise 1: Typed Array


let names: string[] = ["Ahmed", "Ali", "Hassan"];

let grades: number[] = [90, 85, 70];

let MyStatus: boolean[] = [true, false, true];

//  Wrong types - TypeScript error
// names.push(100);
// grades.push("95");
// status.push("true");

// Correct types
names.push("Mohamed");
grades.push(100);
MyStatus.push(false);

console.log(names);
console.log(grades);
console.log(MyStatus);



//  Convert to TypeScript

let products: string[] = ["Phone", "Laptop"];

//  Correct
products.push("Tablet");

//  Error: number is not allowed
// products.push(99);

console.log(products);



// Exercise 3: Tuple


let MyLocation: [string, number, number] = [
  "xamarwayne",
  -8.839,
  13.2894
];

console.log(MyLocation);