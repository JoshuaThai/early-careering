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
        featuresLink: this.page.getByRole('banner').getByRole('link', { name: 'Features' }),
        aboutLink: this.page.getByRole('banner').getByRole('link', { name: 'About' }),
        loginLink: this.page.getByRole('link', { name: 'Login/ Sign Up' }),

        // Title and Subtitle
        title: this.page.locator('section').filter({ hasText: 'EarlyCareeringYour career' })
        .getByRole('heading'),

        // Logo
        logo: this.page.getByRole('banner').getByRole('link', { name: 'EarlyCareering' }),

        // Section Headings
        productHeading: this.page.getByRole('heading', { name: 'What on Earth is' }),
        featuresHeading: this.page.getByRole('heading', { name: 'Core Features' }),
        callToActionHeading: this.page.getByRole('heading', { name: 'Ready to take control of your' }),

        }
    }

}