import { APIRequestContext } from "@playwright/test";
import Contact from "../Models/contact";

export default class ContactApi{
    async addContact(request: APIRequestContext, contact: Contact) {
        return await request.post('/contacts', {
            data: {
                firstName: contact.getFirstName(),
                lastName: contact.getLastName(),
                birthdate: contact.getBirthdate(),
                email: contact.getEmail(),
                phone: contact.getPhone(),
                street1: contact.getStreetAddress1(),
                street2: contact.getStreetAddress2(),
                city: contact.getCity(),
                stateProvince: contact.getState(),
                postalCode: contact.getPostalCode(),
                country: contact.getCountry()
            }
        })
    }
}