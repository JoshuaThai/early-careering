import {Given, When, Then, Before, BeforeAll} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

import LoginPage from "../pages/LoginPage";

let loginPage: LoginPage;

Before(async function() {
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