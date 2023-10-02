import { APIRequestContext, BrowserContext, Page, request } from "@playwright/test";
import User from "../Models/user";
import UserApi from "../apis/UserApi";
import config from '../playwright.config'

export default class SignupPage{

    async load(page: Page) {
        await page.goto('/addUser')
    }

    private get firstNameInput() {
        return '#firstName';
    }
    private get lastNameInput() {
        return '#lastName';
    }
    private get emailInput() {
        return '#email';
    }
    private get passwordInput() {
        return '#password';
    }

    private get submitBtn() {
        return '#submit';
    }

    async signup(page: Page, user: User) {
        await page.fill(this.firstNameInput, user.getFirstName());
        await page.fill(this.lastNameInput, user.getLastName());
        await page.fill(this.emailInput, user.getEmail());
        await page.fill(this.passwordInput, user.getPassword());
        await page.click(this.submitBtn);
    }

    async signupUsingApi(request: APIRequestContext, user: User, context: BrowserContext) {
        const response = await new UserApi().signup(request, user);
        const responseBody = await response.json();
        const token = responseBody.token;
        user.setToken(token);
        await context.addCookies([
            {
                name: 'token',
                value: token,
                url: config.use?.baseURL
            }
        ]);
    }






}