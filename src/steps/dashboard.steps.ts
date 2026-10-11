import { Given, When, Then, Before, BeforeAll, context } from "@cucumber/cucumber";
import { expect, Locator, Page} from "@playwright/test";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

let loginPage: LoginPage;
// let newPage : Page;
let dashboardPage: DashboardPage;

Before(async function () {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  loginPage = new LoginPage(this.page);
  dashboardPage = new DashboardPage(this.page);
});

Then('the user enters the test account information', async function () {
    await expect(loginPage.elements.signUpEmailField).toBeVisible();
    await loginPage.elements.signUpEmailField.fill(dashboardPage.test_account_info["email"]);
    await loginPage.elements.signUpPasswordField.fill(dashboardPage.test_account_info["password"]);
    await loginPage.elements.signUpConfirmPassField.fill(dashboardPage.test_account_info["password"]);
    await loginPage.elements.firstNameField.fill(dashboardPage.test_account_info["first_name"]);
    await loginPage.elements.phoneNumberField.fill(dashboardPage.test_account_info["phone_number"]);
    await this.page.getByRole('radio', { name: 'Late-Career or Senior-Level' }).click();
    await loginPage.elements.industryQuestion.selectOption(dashboardPage.test_account_info["industry"]);
    await loginPage.elements.termsCheckbox.check();
    await loginPage.elements.signUpButton.click();
});

When('the user signs into the test account', async function () {
  await expect(loginPage.elements.emailField).toBeVisible();
  await loginPage.elements.emailField.fill(dashboardPage.test_account_info["email"]);
  await expect(loginPage.elements.passwordField).toBeVisible();
  await loginPage.elements.passwordField.fill(dashboardPage.test_account_info["password"]);
  await expect(loginPage.elements.loginButton).toBeVisible();
  await loginPage.elements.loginButton.click();
});

Then('the user verifies that all three nav bar links can be seen in dashboard page', async function () {
  await expect(dashboardPage.elements.dashboardLink).toBeVisible();
  await expect(dashboardPage.elements.contactLink).toBeVisible();
  await expect(dashboardPage.elements.faqsLink).toBeVisible();
});

Then('the user verifies that the nav bar has a profile button', async function () {
    await expect(dashboardPage.elements.profileDropdown).toBeVisible();
    await dashboardPage.elements.profileDropdown.hover();
});

Then('the user verifies that the profile button includes three links', async function () {
  // Write code here that turns the phrase above into concrete actions
  await expect(dashboardPage.elements.profileLink).toBeVisible();
  await expect(dashboardPage.elements.termsLink).toBeVisible();
  await expect(dashboardPage.elements.logOut).toBeVisible();
});

Then('the user should see a {string} link in the footer', async function (linkName: string) {
  if(linkName == "Home"){
    await expect(dashboardPage.elements.homeFooterLink).toBeVisible();
  }
});

Then('the user clicks {string} in footer', async function (linkName: string) {
    if(linkName == "Home"){
    await dashboardPage.elements.homeFooterLink.click();
  }
});

Then('the user verifies that they see {string} in the logged in modal', 
    async function (linksName: string) {
    if(linksName == "three links"){
        await expect(dashboardPage.elements.dashboardLink).toBeVisible();
        await expect(dashboardPage.elements.contactLink).toBeVisible();
        await expect(dashboardPage.elements.faqsLink).toBeVisible();
    } else if(linksName == "three more links"){
        await expect(dashboardPage.elements.profileLink).toBeVisible();
        await expect(dashboardPage.elements.termsLink).toBeVisible();
        await expect(dashboardPage.elements.logOut).toBeVisible();
    }
});

Then('the user verifies that they also see a button with the user\'s name', async function () {
  await expect(dashboardPage.elements.viewMore).toBeVisible();
});

Then('the user clicks the button with the user\'s name', async function () {
  await dashboardPage.elements.viewMore.click();
});