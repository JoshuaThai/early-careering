import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

export class CustomWorld extends World {
  // Use definite assignment assertions (!) because hooks will manage their lifecycle
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

// Tell Cucumber to use your CustomWorld class instead of the default one
setWorldConstructor(CustomWorld);