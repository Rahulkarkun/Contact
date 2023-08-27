class ContactInfo
{
    static id = 0
    constructor(typeOfContact, valueOfContact)
    {
        this.typeOfContact = typeOfContact
        this.valueOfContact = valueOfContact
        this.id = ContactInfo.id++
    }

    static newContactInfo(typeOfContact,valueOfContact)
    {
        if(typeof typeOfContact != 'string')
        {
            throw new Error("Invalid type")
        }

        if(typeof valueOfContact != 'string')
        {
            throw new Error("Invalid Value")
        }

        return new ContactInfo(typeOfContact,valueOfContact)
    }

    #updateTypeOfContact(newValue)
    {

        if(newValue != 'string')
        {
            throw new Error("Invalid Value")
        }
        this.typeOfContact = newValue
    }

    #updateValueOfContact(newValue)
    {
        if(newValue != 'string')
        {
            throw new Error("Invalid Value")
        }
        this.valueOfContact = newValue
    }

    updateContactInfo(parameter, newValue)
    {
        if(paramter != 'string')
        {
            throw new Error("Invalid Parameter")
        }
        switch (parameter) {
            case "typeOfContact":
                this.#updateTypeOfContact(newValue)
                break;
            case "valueOfContact":
                this.#updateValueOfContact(newValue)
                break;
            default:
                break;
        }
    }

    
}
module.exports = ContactInfo