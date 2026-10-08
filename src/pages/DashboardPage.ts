import { Page } from "@playwright/test";

export default class DashboardPage {
    page: Page;


    constructor(page: Page){
        this.page = page;
    }

    get elements() {

        return{
            heroTitle: this.page.locator('#heroTitle'),
            // Header Locators
            dashboardLink: this.page.getByRole('link', { name: 'Dashboard' }),
            contactLink: this.page.getByRole('banner').getByRole('link', { name: 'Contact' }),
            faqsLink: this.page.getByRole('link', { name: 'FAQs' }),
            profileDropdown: this.page.locator('#profileDropdown'),
            // Profile Dropdown Locators
            profileLink: this.page.getByRole('link', { name: 'Your Profile' }),
            termsLink: this.page.getByRole('link', { name: 'Terms & Conditions' }),
            logOut: this.page.getByRole('banner').getByRole('button', { name: 'Log Out' }),

            // Small Screen UI Locators
            navBarMenu: this.page.getByRole('button', { name: 'Menu' }),
            closeMenu: this.page.getByRole('button', { name: 'X', exact: true }),
            viewMore: this.page.locator('#profileCollapsible'),

        }
    }
}