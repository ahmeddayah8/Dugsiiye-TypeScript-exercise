"use strict";
// 1. Define and Use an Interface
function userInfo(user) {
    console.log(`${user.username} is ${user.email}`);
}
userInfo({
    username: "axmed",
    email: "axmed@gmail.com",
});
const p1 = { username: "Ali" };
console.log(p1);
const b = {
    id: "999222000",
    username: "wiil waal"
};
b.id = "999-000";
