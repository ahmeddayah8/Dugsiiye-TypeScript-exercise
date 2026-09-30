"use strict";
//  1: Add Types to a Function
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("Ahmed", "Dayah"));
// 2: Optional & Default Parameters
function registerUser(username, isAdmin, language = "en") {
    console.log("Username:", username);
    console.log("Admin:", isAdmin);
    console.log("Language:", language);
}
registerUser("Ahmed");
registerUser("Ali", true);
registerUser("Hassan", false, "so");
//  3: Rest Parameters
function average(...scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(average(80, 90, 70)); // 80
console.log(average(90, 80, 70, 100)); // 85
console.log(average(100, 90, 80, 70, 60)); // 80
