import { test, expect, type Page, request } from '@playwright/test';
import User from '../Models/user';
import SignupPage from '../Pages/SignupPage';
import AddContactPage from '../Pages/AddContactPage';
import Contact from '../Models/contact';

test('Add a new contact', async ({ page, request, context }) => {
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingApi(request, user, context);
    const contact = new Contact();
    const addNewContactPage = new AddContactPage();
    await addNewContactPage.load(page);
    await addNewContactPage.addNewContact(page, contact);
    const response = await request.get('/contacts', {
        headers: {
            Authorization: `Bearer ${user.getToken()}`

        }
    });
    await expect(response).toBeOK();

});
