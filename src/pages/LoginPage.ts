import { Page } from "@playwright/test";

export default class LoginPage {
    page: Page;


    constructor(page: Page){
        this.page = page;
    }

    get elements() {
        return{
            // Login Page
            loginTitle: this.page.getByRole('heading', { name: 'Login' }),
            emailField: this.page.getByRole('textbox', { name: 'Email *' }),
            passwordField: this.page.getByRole('textbox', { name: 'Password *' }),
            loginSwitch: this.page.getByRole('button', { name: 'Login' }).first(),
            signupSwitch: this.page.getByRole('button', { name: 'Sign Up' }),

            // Signup Page
            signUpTitle: this.page.getByRole('heading', { name: 'Sign Up' }),
            signUpEmailField: this.page.getByRole('textbox', { name: 'Email *' }),
            signUpPasswordField: this.page.getByRole('textbox', { name: 'Password *', exact: true }),
            signUpConfirmPassField: this.page.getByRole('textbox', { name: 'Confirm Password *' }),
            firstNameField: this.page.getByRole('textbox', { name: 'First Name *' }),
            phoneNumberField: this.page.getByRole('textbox', { name: 'Phone Number *' }),
            careerJourneyQuestion: this.page.getByText('Where are you in your career'),
            industryQuestion: this.page.getByLabel('What industry are you working'),
            termsAndConditions: this.page.getByText('By checking this box, you')
        }
    }

}