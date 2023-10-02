import { Page } from "@playwright/test";
import User from "../Models/user";


export default class LoginPage{

    async load(page: Page) {
        await page.goto('/login');
    }

    private get emailInput() {
        return '#email';
    }

    private get passwordInput() {
        return '#password';
    }

    private get submitBtn() {
        return '#submit'
    }

    private get signupBtn() {
        return '#signup';
    }

    async login(page: Page, user: User) {
        await page.fill(this.emailInput, user.getEmail());
        await page.fill(this.passwordInput, user.getPassword());
        await page.click(this.submitBtn);
    }

    getSignupBtnElement(page: Page) {
        return page.locator(this.signupBtn);
    }

}