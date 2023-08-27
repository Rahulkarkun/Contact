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
        //string validation
        this.typeOfContact = newValue
    }

    #updateValueOfContact(newValue)
    {
        //string validation
        this.valueOfContact = newValue
    }

    updateContactInfo(parameter, newValue)
    {
        //parameter is string
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