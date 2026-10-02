import {Given, When, Then, Before, BeforeAll} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import FeaturesPage from "../pages/FeaturesPage";

let featuresPage: FeaturesPage;

Before(async function(){
    featuresPage = new FeaturesPage(this.page);
})

Given('the user is on the Features page', async function () {
    await this.page.goto('http://localhost:3000/features');
});

When('the Features page loads', async function () {
  await expect(this.page).toHaveURL('http://localhost:3000/features');
  await expect(this.page).toHaveTitle('Features | EarlyCareering');
});

Then('the user verifies that the Features page is fully loaded with the main title', async function () {
  await expect(featuresPage.elements.title).toBeVisible();
});

Then('the user should see all of the Features page heading', async function () {
  await expect(featuresPage.elements.subtitle).toBeVisible();
  await expect(featuresPage.elements.earlyCareeringTitle).toBeVisible();
  await expect(featuresPage.elements.versusTitle).toBeVisible();
  await expect(featuresPage.elements.averageJobTitle).toBeVisible();
});

Then('the user verifies that the EarlyCareering\'s Facts is fully loaded', async function () {
  await expect(featuresPage.elements.ourApp).toBeVisible();
  await expect(featuresPage.elements.fastFeedback).toBeVisible();
  await expect(featuresPage.elements.personalFeed).toBeVisible();
  await expect(featuresPage.elements.anyAndAll).toBeVisible();
  await expect(featuresPage.elements.sortJob).toBeVisible();
  await expect(featuresPage.elements.designAccessible).toBeVisible();
  await expect(featuresPage.elements.completelyFree).toBeVisible();
});

Then('the user verifies that the Other App\'s Facts is fully loaded', async function () {
  await expect(featuresPage.elements.theirApps).toBeVisible();
  await expect(featuresPage.elements.tooBloated).toBeVisible();
  await expect(featuresPage.elements.unableTrack).toBeVisible();
  await expect(featuresPage.elements.notDesigned).toBeVisible();
  await expect(featuresPage.elements.focusedPromote).toBeVisible();
  await expect(featuresPage.elements.notTransparent).toBeVisible();
  await expect(featuresPage.elements.expensiveApp).toBeVisible();
});

Then('the user verifies that the Call to Action in Features page redirects to login page', async function () {
  await expect(featuresPage.elements.callToAction).toBeVisible();
  await featuresPage.elements.callToAction.click();
  await expect(this.page).toHaveURL("http://localhost:3000/login");
});