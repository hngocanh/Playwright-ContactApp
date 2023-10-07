import { faker } from "@faker-js/faker"

export default class Contact{
    private firstName: string
    private lastName: string
    private email: string
    private birthdate: string
    private phone: string
    private streetAddress1: string
    private streetAddress2: string
    private city: string
    private state: string
    private postalCode: string
    private country: string

    constructor() {
        this.firstName = faker.person.firstName('male');
        this.lastName = faker.person.lastName('male');
        this.email = faker.internet.email();
        this.birthdate = "2000-02-12";
        this.phone = "123123123";
        this.streetAddress1 = "123 Main Street";
        this.streetAddress2 = "Apt. 4B";
        this.city = "New York";
        this.state = "NY";
        this.postalCode = "10001";
        this.country = "USA"
    }

    getFirstName() {
        return this.firstName;
    };

    getLastName() {
        return this.lastName;
    };

    getEmail() {
        return this.email;
    };

    getBirthdate() {
        return this.birthdate;
    }

    getPhone() {
        return this.phone;
    }

    getStreetAddress1() {
        return this.streetAddress1;
    }

    getStreetAddress2() {
        return this.streetAddress2;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }

    getPostalCode() {
        return this.postalCode;
    }

    getCountry() {
        return this.country;
    }

}