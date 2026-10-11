import { Page } from "@playwright/test";

export default class DashboardPage {
    page: Page;
    test_account_info = {
        "email": "test99@email.com",
        "password": "123456789!",
        "first_name": "MJ",
        "phone_number": "4145009780",
        "career_journey": "Late-Career",
        "industry": "Technology",
    }


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

            // Small Screen Modal Locators will reuse the previously named locators as
            // it is just the same locator but in the modal window.

            // Footer Locators
            homeFooterLink: this.page.getByRole('link', { name: 'Home' }),
            featuresFooterLink: this.page.getByRole('link', { name: 'Features' }),
            aboutFooterLink: this.page.getByRole('link', { name: 'About' }),
            contactFooterLink: this.page.getByRole('link', { name: 'Contact' })
            

        }
    }
}