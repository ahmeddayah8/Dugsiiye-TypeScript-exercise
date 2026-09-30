
// 1 Echo Function with Generics

function echo<T>(input: T): T {
  return input;
}

// String
const text = echo("Ahmed");
console.log(text.toUpperCase());

// Number
const number = echo(25);
console.log(number.toFixed(2));

// Array
const numbers = echo([10, 20, 30]);
console.log(numbers.map((num) => num * 2));

// Object
const user = echo({ id: 1, name: "Ahmed" });
console.log(user.name);



// 2 Generic Interface

interface ApiResult<T> {
  status: string;
  data: T;
}

// Data string
const messageResult: ApiResult<string> = {
  status: "success",
  data: "User created successfully",
};

console.log(messageResult.data.toUpperCase());

// Data object
const userResult: ApiResult<{ id: number; name: string }> = {
  status: "success",
  data: {
    id: 1,
    name: "Ahmed",
  },
};

console.log(userResult.data.name);



// 3 First Element Function

function first<T>(items: T[]): T {
  if (items.length === 0) {
    throw new Error("Array-gu waa madhan yahay");
  }

  return items[0]!;
}

// Array of numbers
const firstNumber = first([10, 20, 30]);
console.log(firstNumber); // 10

// Array of strings
const firstString = first(["Ahmed", "Ali", "Amina"]);
console.log(firstString); // Ahmed

// Array of objects
const firstUser = first([
  { id: 1, name: "Ahmed" },
  { id: 2, name: "Ali" },
]);

console.log(firstUser); 
console.log(firstUser.name); // Ahme