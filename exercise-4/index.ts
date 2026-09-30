
// 1. Define and Use an Interface

interface User {
  username: string;
  email: string;
}

function userInfo(user: User): void {
  console.log(`${user.username} is ${user.email}`);
}

userInfo({
  username: "axmed",
  email: "axmed@gmail.com",
});

// 2. Optional Property


interface User2 {
  username: string;
  email?: string;
}

const p1: User2 = { username: "Ali" }; 

console.log(p1);





// 3. Readonly


interface User3 {
  readonly id: string;
  username: string;
}

const b: User3 = {
  id: "999222000",
  username: "wiil waal"
};

b.id = "999-000";

