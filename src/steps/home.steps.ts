import {Given, When, Then} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

Given('the user is on the homepage', async function () {
  // Write code here that turns the phrase above into concrete actions
  await this.page.goto('http://localhost:3000/');
  await this.page.waitForTimeout(2000); // Wait for 1 second to ensure the page is fully loaded
});

Then('the user should see the title {string}', async function (Title: string) {
  await expect(this.page.getByRole('heading', { name: Title }).nth(1)).toBeVisible();
});