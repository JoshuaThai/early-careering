import { Given, When, Then, Before, BeforeAll, context } from "@cucumber/cucumber";
import { expect, Locator, Page} from "@playwright/test";

import LoginPage from "../pages/LoginPage";

let loginPage: LoginPage;
let newPage : Page;

Before(async function () {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  loginPage = new LoginPage(this.page);
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