import { test, expect } from '@playwright/test';
import User from '../Models/user';
import SignupPage from '../Pages/SignupPage';
import AddContactPage from '../Pages/AddContactPage';
import Contact from '../Models/contact';
import ContactDetailsPage from '../Pages/ContactDetailsPage';
import EditContactPage from '../Pages/EditContactPage';
import ContactListPage from '../Pages/ContactListPage';
import ContactApi from '../apis/ContactApi';

test('Add a new contact', async ({ page, request, context }) => {
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingApi(request, user, context);
    const contact = new Contact();
    const addNewContactPage = new AddContactPage();
    await addNewContactPage.load(page);
    await addNewContactPage.addNewContact(page, contact);
    const response = await new ContactApi().getContact(request, contact, user);
    await expect(response).toBeOK();
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody[0].firstName).toEqual(contact.getFirstName());
    expect(responseBody[0].lastName).toEqual(contact.getLastName());
    // expect(responseBody[0].email).toEqual(contact.getEmail());
    expect(responseBody[0].birthdate).toEqual(contact.getBirthdate());
    expect(responseBody[0].phone).toEqual(contact.getPhone());
    expect(responseBody[0].street1).toEqual(contact.getStreetAddress1());
    expect(responseBody[0].street2).toEqual(contact.getStreetAddress2());
    expect(responseBody[0].city).toEqual(contact.getCity());
    expect(responseBody[0].stateProvince).toEqual(contact.getState());
    expect(responseBody[0].postalCode).toEqual(contact.getPostalCode());
    expect(responseBody[0].country).toEqual(contact.getCountry());
    

});

test('Delete an existing contact', async ({ page, request, context }) => {
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingApi(request, user, context);
    const contact = new Contact();
    const addNewContactPage = new AddContactPage();
    await addNewContactPage.addContactUsingApi(request, contact, context, user);
    const contactListPage = new ContactListPage();
    await contactListPage.load(page);
    const contactDetailsPage = new ContactDetailsPage();
    await contactDetailsPage.load(page, contact);
    page.on('dialog', async (dialog) => { await dialog.accept() });
    await page.click('#delete');
    const response = await new ContactApi().getContact(request, contact, user);
    await expect(response).toBeOK();
    const responseBody = await response.json();
    expect(responseBody.length).toEqual(0);
});

test('Edit an existing contact', async ({ page, request, context }) => {
    const user = new User();
    const signupPage = new SignupPage();
    await signupPage.signupUsingApi(request, user, context);
    const contact = new Contact();
    const addNewContactPage = new AddContactPage();
    await addNewContactPage.addContactUsingApi(request, contact, context, user);
    const contactListPage = new ContactListPage();
    await contactListPage.load(page);
    const contactDetailsPage = new ContactDetailsPage();
    await contactDetailsPage.load(page, contact);
    await page.click('#edit-contact');

    const editContactPage = new EditContactPage();
    await expect(editContactPage.getFirstNameInput(page)).toHaveValue(contact.getFirstName());
    await expect(editContactPage.getLastNameInput(page)).toHaveValue(contact.getLastName());
    // await expect(editContactPage.getEmailInput(page)).toHaveValue(contact.getEmail());
    // await expect(editContactPage.getBirthdateInput(page)).toHaveValue(contact.getBirthdate());
    await expect(editContactPage.getPhoneInput(page)).toHaveValue(contact.getPhone());
    await expect(editContactPage.getStreet1Input(page)).toHaveValue(contact.getStreetAddress1());
    await expect(editContactPage.getStreet2Input(page)).toHaveValue(contact.getStreetAddress2());
    await expect(editContactPage.getCityInput(page)).toHaveValue(contact.getCity());
    await expect(editContactPage.getStateInput(page)).toHaveValue(contact.getState());
    await expect(editContactPage.getPostalCodeInput(page)).toHaveValue(contact.getPostalCode());
    await expect(editContactPage.getCountryInput(page)).toHaveValue(contact.getCountry());

    await page.fill('#street1', "99 Wall Street");
    await page.fill('#street2', "Empire State Building");
    await page.click('#submit');
    const response = await new ContactApi().getContact(request, contact, user);
    await expect(response).toBeOK();
    const responseBody = await response.json();
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody[0].street1).toEqual("99 Wall Street");
    expect(responseBody[0].street2).toEqual("Empire State Building");


});






