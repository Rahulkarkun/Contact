const Contact = require("./Contact")
class User {
    static id = 0
    static allUsers = []
    isAdmin = false

    constructor(name, age, gender, isAdmin) {
        this.name = name
        this.age = age
        this.gender = gender
        this.isAdmin = isAdmin
        this.id = User.id++
        this.contacts = []
    }

    static newAdmin(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error("Invalid name")
            }

            if (typeof age != 'number') {
                throw new Error("Invalid number")
            }

            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error("Invalid gender")
            }
            return new User(name, age, gender, true)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    newUser(name, age, gender) {
        try {
            if (typeof name != 'string') {
                throw new Error("Invalid name")
            }

            if (typeof age != 'number') {
                throw new Error("Invalid number")
            }

            if (gender != 'M' && gender != 'F' && gender != 'O') {
                throw new Error("Invalid gender")
            }
            const user = new User(name, age, gender, false);
            User.allUsers.push(user);
            return user;
        }
        catch (error) {
            console.log(error.message)
        }
    }

    getAllUsers() {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
        } catch (error) {
            console.log(error.message);
        }
        return User.allUsers
    }

    static #findUser(userId) {
        try {
            if (typeof userId != 'number') {
                throw new Error("Invalid Id")
            }
            for (let index = 0; index <= User.allUsers.length; index++) {
                if (userId == User.allUsers[index].id) {
                    return [User.allUsers[index], index]
                }
            }
        }
        catch (error) {
            console.log(error.message)
        }
        return [null, -1]
    }

    #updateName(newValue) {
        try {
            if (typeof newValue != 'string') {
                throw new Error("Invalid name")
            }
        } catch (error) {
            console.log(error.message)
        }

        this.name = newValue
    }

    #updateAge(newValue) {
        try {
            if (typeof newValue != 'number') {
                throw new Error("Invalid Age")
            }
        } catch (error) {
            console.log(error.message)
        }

        this.age = newValue
    }

    #updateGender(newValue) {
        try {
            if (newValue != "string" && newValue != "M" && newValue != "F" && newValue != "O") {
                throw new Error("Not valid Gender")
            }
        } catch (error) {
            console.log(error.message)
        }
        return this.gender = newValue
    }

    updateUser(userId, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [userToBeUpdated, indexOfUserToBeDeleted] = User.#findUser(userId)
            console.log("userToBeUpdated, indexOfUserToBeDeleted", userToBeUpdated, indexOfUserToBeDeleted)
            if (userToBeUpdated == null) {
                throw new Error("User not found")
            }
            switch (parameter) {
                case 'name':
                    userToBeUpdated.#updateName(newValue);
                    break;
                case 'age':
                    userToBeUpdated.#updateAge(newValue);
                    break;
                case 'gender':
                    userToBeUpdated.#updateGender(newValue);
                    break;
                default:
                    throw new Error("No field found")
            }
            //return userToBeUpdated
        }
        catch (error) {
            console.log(error.message);
        }
    }

    deleteUser(userId) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an Admin")
            }
            let [userToBeDeleted, indexOfUserToBeDeleted] = User.#findUser(userId)
            if (userToBeDeleted == null) {
                throw new Error("User not found")
            }
            User.allUsers.splice(indexOfUserToBeDeleted, 1)
            return `${userToBeDeleted.id} is Deleted successfully !!`
        }
        catch (error) {
            console.log(error.message);
        }
    }

    createContact(name) {
        try {
            if (this.isAdmin) {
                throw Error("Not a user")
            }
            
            let newContact = Contact.newContact(name)
            this.contacts.push(newContact)
            return newContact
        } catch (error) {
            console.log(error.message)
        }
    }

    getAllContacts() {
        if (this.isAdmin) {
            throw new Error("Not an user")
        }
        return this.contacts
    }

    #findContact(contactID) {
        if (contactID < 0 && contactID != 'string') {
            throw Error("Invalid contactId")
        }
        for (let index = 0; index < this.contacts.length; index++) {
            if (contactID == this.contacts[index].id) {
                return [this.contacts[index], index]
            }
        }
        return [null, -1]
    }

    updateContact(contactID, parameter, newValue) {
        try {
            if (this.isAdmin) {
                throw new Error("Not an user")
            }
            if (contactID < 0 || typeof contactID != 'number') {
                throw new Error("Invalid ContactId")
            }
            let [foundContact, indexOfContact] = this.findContact(contactID)
            if (foundContact == null) {
                throw new Error("Contact not found")
            }
            foundContact.updateContact(parameter, newValue)
        } catch (error) {
            console.log(error.message)
        }
    }

    createContactInfo(typeOfContact,valueOfContact,contactID)
    {
        try 
        {
            if (this.isAdmin) {
                throw new Error("Admin cannot Read Contact")
            }
            let [foundContact, indexOfContact] = this.#findContact(contactID)
            if (foundContact == null) {
                throw new Error("Contact not found")
            }
            let newContactInfo = foundContact.createContactInfo(typeOfContact,valueOfContact)
            return newContactInfo
        } catch (error) {
            console.log(error.message)
        }
    }

    getAllContactInfoOfContactID(contactID)
    {
        try 
        {
            if (this.isAdmin) {
                throw new Error("Admin cannot Read Contact")
            }
            let [foundContact, indexOfContact] = this.#findContact(contactID)
            if (foundContact == null) {
                throw new Error("Contact not found")
            }
            return foundContact.getAllContactInfos()
        } catch (error) {
            console.log(error.message)
        }
    }

    updateContactInfoByContactID(contactID,parameter,newValue,contactInfoID)
    {
        try 
        {
            if (this.isAdmin) {
                throw new Error("Admin cannot Read Contact")
            }
            let [foundContact, indexOfContact] = this.#findContact(contactID)
            if (foundContact == null) {
                throw new Error("Contact not found")
            }
            foundContact.updateContactInfo(parameter,newValue,contactInfoID)
        } catch (error) {
            console.log(error.message)
        }
    }

    // findContactInfo(contactInfoID)
    // {
    //     for (let index = 0; index < this.contactInfos.length; index++) {
    //         if(contactInfoID == this.contactInfos[index].id)
    //         {
    //             return [this.contactInfos[index], index]
    //         }
    //         return [null,-1]
    //     }
    // }

    deleteContactInfoByContactID(contactID,contactInfoID)
    {
        try 
        {
            if (this.isAdmin) {
                throw new Error("Admin cannot Read Contact")
            }
            let [foundContact, indexOfContact] = this.#findContact(contactID)
            if (foundContact == null) {
                throw new Error("Contact not found")
            }
            foundContact.deleteContactInfo(contactInfoID)
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = User