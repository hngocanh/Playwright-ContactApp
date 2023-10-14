import { Page } from "@playwright/test";
import Contact from "../Models/contact";

export default class ContactDetailsPage{

    async load(page: Page, contact: Contact) {
        await page.getByRole('cell', { name: contact.getCountry() }).click();
    }



}