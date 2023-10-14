import { Locator, Page } from "@playwright/test";

export default class EditContactPage{

    getFirstNameInput(page: Page) {
        return page.locator('#firstName');
    }
    getLastNameInput(page: Page) {
        return page.locator('#lastName');
    }
    getEmailInput(page: Page) {
        return page.locator('#email');
    }

    getBirthdateInput(page: Page) {
        return page.locator('page.locator#birthdate')
    }

    getPhoneInput(page: Page) {
        return page.locator('#phone')
    }

    getStreet1Input(page: Page) {
        return page.locator('#street1')
    }

    getStreet2Input(page: Page) {
        return page.locator('#street2')
    }

    getCityInput(page: Page) {
        return page.locator('#city')
    }

    getStateInput(page: Page) {
        return page.locator('#stateProvince')
    }

    getPostalCodeInput(page: Page) {
        return page.locator('#postalCode')
    }

    getCountryInput(page: Page) {
        return page.locator('#country')
    }


    getSubmitBtn(page: Page) {
        return page.locator('#submit')
    }
    
    async load(page: Page) {
        await page.goto('/editContact')
    }

    async editContact(page: Page) {
        
    }

}