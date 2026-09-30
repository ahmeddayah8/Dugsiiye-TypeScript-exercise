


// UserRole Enum


enum UserRole {
  SuperAdmin = "superadmin",
  Moderator = "moderator",
  Viewer = "viewer",
}

function canEdit(role: UserRole): boolean {
  return role !== UserRole.Viewer;
}

console.log(canEdit(UserRole.SuperAdmin)); 
console.log(canEdit(UserRole.Moderator));  
console.log(canEdit(UserRole.Viewer));     


// Type Assertion with as


const button = document.querySelector("#submitBtn") as HTMLButtonElement;

button.disabled = true;