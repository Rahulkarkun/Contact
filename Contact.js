const ContactInfo = require("./ContactInfo")

class Contact
{
    static id = 0
    constructor(name)
    {
        this.name = name
        this.id = Contact.id++
        this.contactInfos = []
    }

    static newContact(name)
    {
        if (typeof name != 'string') {
            throw new Error("Invalid name")
        }
        return new Contact(name)
    }
    updateContact(parameter,newValue)
    {
        switch(parameter)
        {
            case 'name':
                this.updateName(newValue)
                break
            default:
                break
        }
    }

    #updateName(newValue)
    {
        if(newValue != 'string')
        {
            throw Error("Invalid parameter")
        }
        this.name = newValue
    }

    getAllContactInfos()
    {
        return this.contactInfos
    }

    updateContactInfo(parameter,newValue,contactInfoID)
    {
        let [foundContactInfo,IndexOfFoundContactInfo] = this.#findContactInfo(contactInfoID)
        if(foundContactInfo == null)
        {
            throw new Error("ContactInfo not Found")
        }
        foundContactInfo.updateContactInfo(parameter,newValue)
    }

    #findContactInfo(contactInfoID)
    {
        for (let index = 0; index < this.contactInfos.length; index++) {
            if(contactInfoID == this.contactInfos[index].id)
            {
                return [this.contactInfos[index],index]
            }
            return [null,-1]            
        }
    }

    deleteContactInfo(contactInfoID)
    {
        let [foundContactInfo,IndexOfFoundContactInfo] = this.#findContactInfo(contactInfoID)
        if(foundContactInfo == null)
        {
            throw new Error("ContactInfo not Found")
        }
        foundContactInfo.contactInfos.splice(IndexOfFoundContactInfo,1)
    }

    createContactInfo(typeOfContact,valueOfContact)
    {
        let contactInfo = ContactInfo.newContactInfo(typeOfContact,valueOfContact)
        this.contactInfos.push(contactInfo)
        return contactInfo
    }
}
module.exports = Contact