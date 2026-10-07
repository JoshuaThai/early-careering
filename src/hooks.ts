import {chromium, firefox, webkit, Browser, BrowserContext, Page} from "@playwright/test";
import {BeforeAll, Before, AfterAll, After, World} from "@cucumber/cucumber";
import { CustomWorld } from "./world";

let browser: Browser;

BeforeAll(async function() {
    browser = await chromium.launch({headless: false}); // Launch the browser in headless mode
})
Before(async function() {
    const context: BrowserContext = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos"
        },
    });
    const page: Page = await context.newPage();
    
    this.context = context;
    this.page = page;
});

After(async function({pickle}) {
    await this.page.screenshot({ path: `test-results/screenshots/${pickle.name}.png`, fullPage: true});
    await this.page.close();
    await this.context.close();
});

AfterAll(async function() {
    await browser.close();
});