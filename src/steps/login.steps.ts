import { Given, When, Then, Before, BeforeAll } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import { log } from "node:console";

let loginPage: LoginPage;

Before(async function () {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  loginPage = new LoginPage(this.page);
});

Given('the user navigates to the login page', async function () {
  await this.page.goto("http://localhost:3000/login");
});

Then('the user should see a login heading', async function () {
  await expect(loginPage.elements.loginTitle).toBeVisible();
});

Then('the user should see a login switch button', async function () {
  await expect(loginPage.elements.loginSwitch).toBeVisible();
});

Then('the user verifies that they can see all login fields', async function () {
  await expect(loginPage.elements.emailField).toBeVisible();
  await expect(loginPage.elements.passwordField).toBeVisible();
});

Then('the user enters {string} into {string} field in login page', 
  async function (inputValue: string, inputField: string) {
  if(inputField == "email"){
    await expect(loginPage.elements.emailField).toBeVisible();
    await loginPage.elements.emailField.fill(inputValue);
  }
  else if(inputField == "password"){
    await expect(loginPage.elements.passwordField).toBeVisible();
    await loginPage.elements.passwordField.fill(inputValue);
  }
});

Then('the user should see an error message that reads {string}', 
  async function (errorMessage: string) {
  if(errorMessage == "Invalid email or password"){
    await expect(loginPage.elements.loginError).toBeVisible();
  }
});

Then('the user creates an random account', async function () {
    await loginPage.elements.signupSwitch.click();
    await expect(loginPage.elements.signUpEmailField).toBeVisible();
    await loginPage.elements.signUpEmailField.fill(loginPage.random_account_info["email"]);
    await loginPage.elements.signUpPasswordField.fill(loginPage.random_account_info["password"]);
    await loginPage.elements.signUpConfirmPassField.fill(loginPage.random_account_info["password"]);
    await loginPage.elements.firstNameField.fill(loginPage.random_account_info["first_name"]);
    await loginPage.elements.phoneNumberField.fill(loginPage.random_account_info["phone_number"]);
    await loginPage.page.getByLabel(loginPage.choices[loginPage.random_account_info["career_journey"]]).check();
    await loginPage.elements.industryQuestion.selectOption(loginPage.random_account_info["industry"]);
    await loginPage.elements.termsCheckbox.check();
    await loginPage.elements.signUpButton.click();
});

Then('the user enters the random account credentials into the login fields', async function () {
  await expect(loginPage.elements.emailField).toBeVisible();
  await loginPage.elements.emailField.fill(loginPage.random_account_info["email"]);
  await expect(loginPage.elements.passwordField).toBeVisible();
  await loginPage.elements.passwordField.fill(loginPage.random_account_info["password"]);
});