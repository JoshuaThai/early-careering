import { Page } from "@playwright/test";

export default class LoginPage {
    page: Page;
    random_account_info: Record<string,string> ={
        "email": "testing67@email.com",
        "password": "123456789!",
        "first_name": "Jim",
        "phone_number": "4149999999",
        "career_journey": "Mid-Level",
        "industry": "Technology",
    }
    duplicate_account_info: Record<string,string> ={
        "email": "testing1234@email.com",
        "password": "123456789!",
        "first_name": "Josh",
        "phone_number": "4145009780",
        "career_journey": "Early Career",
        "industry": "Technology",
    }

    choices : Record<string, string> = {
        "Early Career" : 'student',
        "Mid-Level" : 'mid-career',
        "Late-Career" : 'later-career', // This one doesn't work for some reason.
    }


    constructor(page: Page){
        this.page = page;
    }

    get elements() {
        return{
            // Login Page
            loginTitle: this.page.getByRole('heading', { name: 'Login' }),
            emailField: this.page.getByRole('textbox', { name: 'Email *' }),
            passwordField: this.page.getByRole('textbox', { name: 'Password *' }),
            loginButton: this.page.locator('form').getByRole('button', { name: 'Login' }),
            loginSwitch: this.page.getByRole('button', { name: 'Login' }).first(),
            signupSwitch: this.page.getByRole('button', { name: 'Sign Up' }),
            loginError: this.page.getByText('Invalid email or password'),

            // Signup Page
            signUpTitle: this.page.getByRole('heading', { name: 'Sign Up' }),
            signUpEmailField: this.page.getByRole('textbox', { name: 'Email *' }),
            signUpPasswordField: this.page.getByRole('textbox', { name: 'Password *', exact: true }),
            signUpConfirmPassField: this.page.getByRole('textbox', { name: 'Confirm Password *' }),
            firstNameField: this.page.getByRole('textbox', { name: 'First Name *' }),
            phoneNumberField: this.page.getByRole('textbox', { name: 'Phone Number *' }),
            careerJourneyQuestion: this.page.getByText('Where are you in your career'),
            industryQuestion: this.page.getByLabel('What industry are you working'),
            termsAndConditions: this.page.getByText('By checking this box, you'),
            termsCheckbox: this.page.getByRole('checkbox', { name: 'By checking this box, you' }),
            termsLink: this.page.getByRole('link', { name: 'Terms and Conditions' }),
            signUpButton: this.page.locator('form').getByRole('button', { name: 'Sign Up' }),

            // Error Message
            duplicateEmailMessage: this.page.getByText('User already exists. Use'),
        }
    }

}