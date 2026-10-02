import {Page} from "@playwright/test";

export default class AboutPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get elements(){
        return{
            // Hero Section
            heroTitle: this.page.getByRole('heading', { name: 'About' }),
            heroSubTitle: this.page.getByRole('heading', { name: 'The Story of EarlyCareering' }),

            // The About Article
            articleText1: this.page.getByText('Hello! My name is Joshua'),
            articleImage: this.page.getByRole('img', { name: 'An image that displays a' }),
            articleText2: this.page.getByText('I hope this job tracker aids'),

            // Article links
            linkedinLink: this.page.getByRole('link', { name: 'www.linkedin.com/in/joshua-' }),
            portfolioLink: this.page.getByRole('link', { name: 'joshuathai.github.io/Joshua-' }),
            gitHubLink: this.page.getByRole('link', { name: 'www.github.com/JoshuaThai' }),

            // Call to Action buttons
            callToAction: this.page.getByRole('button', { name: 'Try it now! →' }),

            // Footer Links
            aboutLink: this.page.getByRole('link', { name: 'About' }).nth(1)
        }
    }
}