import {chromium, firefox, webkit, Browser, BrowserContext, Page} from "@playwright/test";
import {BeforeAll, Before, AfterAll, After, World} from "@cucumber/cucumber";
import { CustomWorld } from "./world";

let browser: Browser;

BeforeAll(async function() {
    browser = await chromium.launch({headless: true}); // Launch the browser in headless mode
})
Before(async function() {
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    
    this.context = context;
    this.page = page;
});

After(async function() {
    await this.page.close();
    await this.context.close();
});

AfterAll(async function() {
    await browser.close();
});