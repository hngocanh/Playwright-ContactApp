import { Page } from "@playwright/test";

export default class ContactListPage{

    async load(page: Page) {
        await page.goto('/contactList');
    }
    
    private get logoutBtn() {
        return '#logout';
    }

    private get addNewContactBtn() {
        return '#add-contact';
    }

    getLogoutBtnElement(page: Page) {
        return page.locator(this.logoutBtn)
    }

    getAddNewContactBtnElement(page: Page) {
        return page.locator(this.addNewContactBtn)
    }

    logout(page: Page) {
        return page.click(this.logoutBtn);
    }

    addNewContact(page: Page) {
        return page.click(this.addNewContactBtn);
    }
}