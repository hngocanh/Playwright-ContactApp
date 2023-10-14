import { APIRequestContext } from "@playwright/test";
import Contact from "../Models/contact";
import User from "../Models/user";


export default class ContactApi{
    async addContact(request: APIRequestContext, contact: Contact, user: User) {
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
            },
            headers: {
                Authorization: `Bearer ${user.getToken()}`
            }
        })
        
    }

    async getContact(request: APIRequestContext, contact: Contact, user: User) {
        return await request.get('/contacts', {
            headers: {
                Authorization: `Bearer ${user.getToken()}`

            }
        })
    }
}