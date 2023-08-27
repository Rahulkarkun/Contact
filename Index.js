const User = require("./User")

let a1 = User.newAdmin("Rahul",22,"M")
let user1 = a1.newUser("Pritish",22,"M")
let user2 = a1.newUser("Amay",16,"M")
console.log(user2)
console.log(a1.getAllUsers());
console.log("----------------------------");
console.log(a1.updateUser(2,'name',"Utkarsh"))
console.log("----------------------------");
console.log(a1.getAllUsers());
console.log(a1.deleteUser(2))
//console.log(User.allUsers)

user1.createContact('Anisha')
user1.getAllContacts()

user1.createContact("Deepanshu")
user1.createContactInfo("mobile","9301782099",0)
user1.createContactInfo("work","9337829208",0)
user1.updateContactInfoByContactID(0,"typeOfContact","Email",0)
user1.updateContactInfoByContactID(0,"valueOfContact","rahulkarkun9015@gmail.com",0)

console.log(user1.getAllContactInfoOfContactID(1));
