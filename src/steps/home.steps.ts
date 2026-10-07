import {Given, When, Then, Before, BeforeAll} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import FeaturesPage from "../pages/FeaturesPage";
import AboutPage from "../pages/AboutPage";
import DashboardPage from "../pages/DashboardPage";
import {CustomWorld} from "../world";

let homePage: HomePage;
let loginPage: LoginPage;
let featuresPage: FeaturesPage;
let aboutPage: AboutPage;
let dashboardPage: DashboardPage;


Before(async function() {
  // This hook runs before all scenarios
  // You can perform setup tasks here, such as launching a browser or initializing test data
  homePage = new HomePage(this.page);
  loginPage = new LoginPage(this.page);
  featuresPage = new FeaturesPage(this.page);
  aboutPage = new AboutPage(this.page);
  dashboardPage = new DashboardPage(this.page);

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

When('the user reduces the window size to {string} by {string}', 
  async function (width: String, height: String) {
    await this.page.setViewportSize({ width: Number(width), height: Number(height) });
});

Then('the user should see the hamburger menu button', async function () {
  await expect(homePage.elements.menuButton).toBeVisible();
});

Then('the user clicks the hamburger menu button', async function () {
  await expect(homePage.elements.menuButton).toBeVisible();
  await homePage.elements.menuButton.click();
});

Then('the user should see the modal window with nav links for logged out users', async function () {
  await expect(homePage.elements.homeMenuButton).toBeVisible();
  await expect(homePage.elements.featuresMenuButton).toBeVisible();
  await expect(homePage.elements.aboutMenuButton).toBeVisible();
  await expect(homePage.elements.loginMenuButton).toBeVisible();
});

Then('the user should click the {string} link', async function (linkName: string) {
  
  if(linkName == "Home"){
    await homePage.elements.homeMenuButton.click();
  }
  if(linkName == "login"){
    await homePage.elements.loginMenuButton.click();
  }
  if(linkName == "features"){
    await homePage.elements.featuresMenuButton.click();
  }
  if(linkName == "about"){
    await homePage.elements.aboutMenuButton.click();
  }
});

Then('the user should be on the homepage', async function () {
  
  await expect(this.page).toHaveTitle("Home | EarlyCareering");
  await expect(homePage.elements.title).toBeVisible();
});

Then('the user should be on the {string} page', async function (linkName: string) {
  if(linkName == "login"){
    await expect(this.page).toHaveTitle("Login | EarlyCareering");
    await expect(loginPage.elements.loginTitle).toBeVisible();
  }
  else if(linkName == "features"){
    await expect(this.page).toHaveTitle("Features | EarlyCareering");
    await expect(featuresPage.elements.title).toBeVisible();
  }
  else if(linkName == "about"){
    await expect(this.page).toHaveTitle("About | EarlyCareering");
    await expect(aboutPage.elements.heroTitle).toBeVisible();
  }
  else if(linkName == "dashboard"){
    await expect(dashboardPage.page).toHaveTitle("Dashboard | EarlyCareering");
    await expect(dashboardPage.elements.heroTitle).toBeVisible();
  }
});