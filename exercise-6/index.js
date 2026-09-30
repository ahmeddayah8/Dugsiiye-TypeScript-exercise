"use strict";
// UserRole Enum
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log(canEdit(UserRole.SuperAdmin));
console.log(canEdit(UserRole.Moderator));
console.log(canEdit(UserRole.Viewer));
// Type Assertion with as
const button = document.querySelector("#submitBtn");
button.disabled = true;
