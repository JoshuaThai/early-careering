import { Page } from "@playwright/test";

export default class HomePage {
    page: Page;


    constructor(page: Page){
        this.page = page;
    }

    get elements() {
        return{

        // Header Navigation Links
        homeLink: this.page.getByRole('banner').getByRole('link', { name: 'Home' }),

        // Title and Subtitle
        title: this.page.locator('section').filter({ hasText: 'EarlyCareeringYour career' })
        .getByRole('heading'),
        }
    }

}