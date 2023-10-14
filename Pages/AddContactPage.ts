import { APIRequestContext, BrowserContext, Page } from "@playwright/test";
import Contact from "../Models/contact";
import ContactApi from "../apis/ContactApi";
import User from "../Models/user";
import config from '../playwright.config'


export default class AddContactPage{

    private get firstNameInput() {
        return '#firstName';
    }
    private get lastNameInput() {
        return '#lastName';
    }
    private get emailInput() {
        return '#email';
    }

    private get birthdateInput() {
        return '#birthdate'
    }

    private get phoneInput() {
        return '#phone'
    }

    private get street1Input() {
        return '#street1'
    }

    private get street2Input() {
        return '#street2'
    }

    private get cityInput() {
        return '#city'
    }

    private get stateInput() {
        return '#stateProvince'
    }

    private get postalCodeInput() {
        return '#postalCode'
    }

    private get countryInput() {
        return '#country'
    }
    
    
    private get submitBtn() {
        return '#submit'
    }
    
    async load(page: Page) {
        await page.goto('/addContact');
    }

    async addNewContact(page: Page, contact: Contact) {
        await page.fill(this.firstNameInput, contact.getFirstName());
        await page.fill(this.lastNameInput, contact.getLastName());
        await page.fill(this.emailInput, contact.getEmail());
        await page.fill(this.birthdateInput, contact.getBirthdate());
        await page.fill(this.phoneInput, contact.getPhone());
        await page.fill(this.street1Input, contact.getStreetAddress1());
        await page.fill(this.street2Input, contact.getStreetAddress2());
        await page.fill(this.cityInput, contact.getCity());
        await page.fill(this.stateInput, contact.getState());
        await page.fill(this.postalCodeInput, contact.getPostalCode());
        await page.fill(this.countryInput, contact.getCountry());
        await page.click(this.submitBtn)
        
    }

    async addContactUsingApi(request: APIRequestContext, contact: Contact, context: BrowserContext, user: User) {
        await new ContactApi().addContact(request, contact, user);
        
    }


}