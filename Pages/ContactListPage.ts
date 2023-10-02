import { Page } from "@playwright/test";

export default class ContactListPage{

    async load(page) {
        await page.goto('/contactList');
    }
    
    private get logoutBtn() {
        return '#logout';
    }

    getLogoutBtnElement(page: Page) {
        return page.locator(this.logoutBtn)
    }

    logout(page: Page) {
        return page.click(this.logoutBtn);
    }
}