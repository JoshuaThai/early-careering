import { Given, When, Then, Before, BeforeAll, context } from "@cucumber/cucumber";
import { expect, Locator, Page} from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import { log } from "node:console";

let loginPage: LoginPage;
let newPage : Page;
let dashboardPage: DashboardPage;

Before(async function () {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  loginPage = new LoginPage(this.page);
  dashboardPage = new DashboardPage(this.page);
});

Then('the user should see a signup switch button', async function () {
  await expect(loginPage.elements.signupSwitch).toBeVisible();
});

When('the user clicks the sign up switch', async function () {
  await loginPage.elements.signupSwitch.click();
});

Then('the user should see a sign up heading', async function () {
  await expect(loginPage.elements.signUpTitle).toBeVisible();
});

Then('the user should see all required fields', async function () {
  await expect(loginPage.elements.signUpEmailField).toBeVisible();
  await expect(loginPage.elements.signUpPasswordField).toBeVisible();
  await expect(loginPage.elements.signUpConfirmPassField).toBeVisible();
  await expect(loginPage.elements.firstNameField).toBeVisible();
  await expect(loginPage.elements.phoneNumberField).toBeVisible();
  await expect(loginPage.elements.careerJourneyQuestion).toBeVisible();
  await expect(loginPage.elements.industryQuestion).toBeVisible();
  await expect(loginPage.elements.termsAndConditions).toBeVisible();
});

Then('the user should see a terms and conditions link that they click', async function () {
  await expect(loginPage.elements.termsLink).toBeVisible();

  const pagePromise = this.context.waitForEvent('page');
  await loginPage.elements.termsLink.click();
  newPage = await pagePromise;
});

Then('the user should see the terms and conditions page', async function () {
  await expect(newPage).toHaveTitle("Terms and Conditions | EarlyCareering");
  const termsSections : Locator = await newPage.locator('.TermsSection');
  // const termsSections : Locator[] = await termsSectionsLocator.all();
  // Confirms that all sections are visible on the terms and conditions page.
  await expect(termsSections).toHaveCount(10);
});

Then('the user clicks the {string} button', async function (buttonName: string) {
  if(buttonName == "sign up"){
    await expect(loginPage.elements.signUpButton).toBeVisible();
    await loginPage.elements.signUpButton.click();
  }
});

Then('the user should remain on the {string} page', async function (pageName: string) {
  if(pageName == "sign up"){
    await expect(loginPage.elements.signUpButton).toBeVisible();
    await expect(loginPage.page).toHaveTitle("Login | EarlyCareering")
  }
});

Then('the user enters {string} in {string}', async function (input: string, inputField: string) {
  if(inputField == "password"){
    await expect(loginPage.elements.signUpPasswordField).toBeVisible();
    await loginPage.elements.signUpPasswordField.fill(input);
  }
  else if(inputField == "confirm password"){
    await expect(loginPage.elements.signUpConfirmPassField).toBeVisible();
    await loginPage.elements.signUpConfirmPassField.fill(input);
  }
  else if(inputField == "email"){
    await expect(loginPage.elements.signUpEmailField).toBeVisible();
    await loginPage.elements.signUpEmailField.fill(input);
  }
  else if(inputField == "First Name"){
    await expect(loginPage.elements.firstNameField).toBeVisible();
    await loginPage.elements.firstNameField.fill(input);
  }
  else if(inputField == "Phone Number"){
    await expect(loginPage.elements.phoneNumberField).toBeVisible();
    await loginPage.elements.phoneNumberField.fill(input);
  }

});

Then('the confirm password must be {string} and say {string}', 
  async function (color: string, message: string) {
  const confirmMessage : Locator = await this.page.getByText(message);
  const colors : Record<string, string> = {
    "red" : "rgb(255, 0, 0)",
    "green" : "rgb(0, 128, 0)"
  }
  await expect(confirmMessage).toBeVisible();
  await expect(confirmMessage).toHaveCSS('color', colors[color]);
});

Then('the user selects {string} in {string}', 
  async function (selected: string, selectField: string) {
  if(selectField == "Career Journey"){
      const choices : Record<string, string> = {
        "Early Career" : 'student',
        "Mid-Level" : 'mid-career',
        "Late Career" : 'later-career',
    }
    await expect(loginPage.elements.careerJourneyQuestion).toBeVisible();
    await loginPage.page.getByLabel(choices[selected]).check();

  }
  if(selectField == "Industry"){
    await expect(loginPage.elements.industryQuestion).toBeVisible();
    await loginPage.elements.industryQuestion.selectOption(selected);
  }
});

Then('the user accepts the terms and services', async function () {
  await expect(loginPage.elements.termsAndConditions).toBeVisible();
  await expect(loginPage.elements.termsCheckbox).toBeVisible();
  await loginPage.elements.termsCheckbox.check();
});

Then('the user should see an error message that says {string}', 
  async function (errorMessage: string) {
  if(errorMessage == "User already exists. Use another email."){
    await expect(loginPage.elements.duplicateEmailMessage).toBeVisible();
  }
});

Then('the user {string}', async function (actionName: string) {
  if(actionName == "logs out"){
    await expect(dashboardPage.elements.profileDropdown).toBeVisible();
    await dashboardPage.elements.profileDropdown.hover();
    await expect(dashboardPage.elements.logOut).toBeVisible();
    await dashboardPage.elements.logOut.click();
    await expect(this.page).toHaveTitle("Login | EarlyCareering");
  }
});

Then('the user signs up with the duplicate account', async function () {
  
  await loginPage.elements.signupSwitch.click();
  await expect(loginPage.elements.signUpEmailField).toBeVisible();
  await loginPage.elements.signUpEmailField.fill(loginPage.duplicate_account_info["email"]);
  await loginPage.elements.signUpPasswordField.fill(loginPage.duplicate_account_info["password"]);
  await loginPage.elements.signUpConfirmPassField.fill(loginPage.duplicate_account_info["password"]);
  await loginPage.elements.firstNameField.fill(loginPage.duplicate_account_info["first_name"]);
  await loginPage.elements.phoneNumberField.fill(loginPage.duplicate_account_info["phone_number"]);
  await loginPage.page.getByLabel(loginPage.choices[loginPage.duplicate_account_info["career_journey"]]).check();
  await loginPage.elements.industryQuestion.selectOption(loginPage.duplicate_account_info["industry"]);
  await loginPage.elements.termsCheckbox.check();
  await loginPage.elements.signUpButton.click();
});