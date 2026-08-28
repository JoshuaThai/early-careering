import { Page } from "@playwright/test";

export default class LoginPage {
    page: Page;


    constructor(page: Page){
        this.page = page;
    }

    get elements() {
        return{
            loginTitle: this.page.getByRole('heading', { name: 'Login' }),
        }
    }

}