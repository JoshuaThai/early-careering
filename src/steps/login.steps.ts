import { Given, When, Then, Before, BeforeAll } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

import LoginPage from "../pages/LoginPage";

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