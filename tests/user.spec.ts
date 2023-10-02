import { test, expect, type Page, request } from '@playwright/test';
import User from '../Models/user';
import SignupPage from '../Pages/SignupPage';
import ContactListPage from '../Pages/ContactListPage';
import LoginPage from '../Pages/LoginPage';

test('Register a new user', async ({ page }) => {
    
    // Test
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.load(page);
    await signupPage.signup(page, user);
    const contactListPage = new ContactListPage();
    const logoutBtn = contactListPage.getLogoutBtnElement(page);
    await expect(logoutBtn).toBeVisible();

});

test('Login user', async ({ page, request, context }) => {
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingApi(request, user, context);
    const loginPage = new LoginPage();
    await loginPage.load(page);
    await loginPage.login(page, user);
    const contactListPage = new ContactListPage();
    const logoutBtn = contactListPage.getLogoutBtnElement(page);
    await expect(logoutBtn).toBeVisible();

});


test('Logout user', async ({ page, request, context }) => {
    
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingApi(request, user, context);
    const contactListPage = new ContactListPage();
    await contactListPage.load(page);
    await contactListPage.logout(page);
    const loginPage = new LoginPage();
    const signupBtn = loginPage.getSignupBtnElement(page);
    await expect(signupBtn).toBeVisible();

});

