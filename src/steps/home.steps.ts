import {Given, When, Then, Before, BeforeAll} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import HomePage from "../pages/HomePage";
import {CustomWorld} from "../world";

let homePage: HomePage;

Before(async function() {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  homePage = new HomePage(this.page);
});

Given('the user is on the homepage', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.page.goto('http://localhost:3000/');
  await this.page.waitForTimeout(2000); // Wait for 1 second to ensure the page is fully loaded
});

Then('the user should see the title {string}', async function (Title: string) {
  // console.log(await homePage.elements.title.textContent());
  await expect(homePage.elements.title).toBeVisible();
  await expect(homePage.elements.title).toHaveText(Title);
});