import {Given, When, Then, Before, BeforeAll} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import {CustomWorld} from "../world";

let homePage: HomePage;
let loginPage: LoginPage;


Before(async function() {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  homePage = new HomePage(this.page);
  loginPage = new LoginPage(this.page);
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

Then('the user should see all of the section headings and the header', async function () {
 
  // Check if the section headings are visible
  await expect(homePage.elements.productHeading).toBeVisible();
  await expect(homePage.elements.featuresHeading).toBeVisible();
  await expect(homePage.elements.callToActionHeading).toBeVisible();
  // Check if the header links are visible
  await expect(homePage.elements.homeLink).toBeVisible();
  await expect(homePage.elements.featuresLink).toBeVisible();
  await expect(homePage.elements.aboutLink).toBeVisible();
  await expect(homePage.elements.loginLink).toBeVisible();
});

When('the users click on the Home link in nav bar', async function () {
  await expect(homePage.elements.homeLink).toBeVisible();
  await homePage.elements.homeLink.click();
});

Then('the user verifies that the user is still on the homepage', async function () {
    
  await expect(this.page).toHaveURL('http://localhost:3000/');
  await expect(homePage.elements.title).toBeVisible();
});

When('the user click on the logo in the header', async function () {
  // Write code here that turns the phrase above into concrete actions
  await expect(homePage.elements.logo).toBeVisible();
  await homePage.elements.logo.click();
});

When('the users click on the Login-Sign Up button', async function () {
  await expect(homePage.elements.loginLink).toBeVisible();
  await homePage.elements.loginLink.click();
});

Then('the user verifies that they end up on the login page', async function () {
  await expect(this.page).toHaveURL('http://localhost:3000/login');
  await expect(loginPage.elements.loginTitle).toBeVisible();
});