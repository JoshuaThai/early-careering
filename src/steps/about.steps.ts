import {Given, When, Then, Before, BeforeAll} from "@cucumber/cucumber";
import {expect} from "@playwright/test";

import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

let aboutPage: AboutPage;
let homePage: HomePage;

Before(async function(){
    aboutPage = new AboutPage(this.page);
    homePage = new HomePage(this.page);
})

Given('the user is on the About page', async function () {
  await this.page.goto("http://localhost:3000/about");
});

Then('the user verifies that the About page is fully loaded with the hero section', async function () {
  await expect(aboutPage.elements.heroTitle).toBeVisible();
  await expect(aboutPage.elements.heroSubTitle).toBeVisible();
});

Then('the user verifies that the text fully loaded', async function () {
  await expect(aboutPage.elements.articleText1).toBeVisible();
  await expect(aboutPage.elements.articleText2).toBeVisible();
});

Then('the user verifies that the image fully loaded', async function () {
  await expect(aboutPage.elements.articleImage).toBeVisible();
  // Check if the image is loaded in and didn't glitched out.
  const doneLoading = aboutPage.elements.articleImage.evaluate((img: HTMLImageElement) =>{
    return img.complete && img.naturalWidth > 0;
  })
  await expect(doneLoading).toBeTruthy();
});

When('the user clicks on {string} link in header', async function (linkName: string) {
  if (linkName == "About"){
    await expect(homePage.elements.aboutLink).toBeVisible();
    await homePage.elements.aboutLink.click();
  }
});

Then('the user verifies that they are on the About Page', async function () {
    await expect(this.page).toHaveTitle("About | EarlyCareering");
});

Then('the user verifies that the Call to Action in About page redirects to login page', async function () {
  await expect(aboutPage.elements.callToAction).toBeVisible();
  await aboutPage.elements.callToAction.click();
  await expect(this.page).toHaveTitle("Login | EarlyCareering");
});

When('the user clicks on {string} link in footer', async function (linkName: string) {
    if (linkName == "About"){
    await expect(homePage.elements.aboutFooterLink).toBeVisible();
    await homePage.elements.aboutFooterLink.click();
    await expect(this.page).toHaveTitle("About | EarlyCareering");
  }
});