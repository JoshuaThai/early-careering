import {Page} from "@playwright/test";

export default class FeaturesPage{
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get elements(){
        return{
            title: this.page.getByRole('heading', { name: 'Features' }),
            subtitle: this.page.getByText('What does EarlyCareering have'),
            earlyCareeringTitle: this.page.getByRole('paragraph').filter({ hasText: /^EarlyCareering$/ }),
            versusTitle: this.page.getByText('VS.'),
            averageJobTitle: this.page.getByText('Your Average Job Tracker'),

            // EarlyCareering Facts
            ourApp: this.page.getByRole('heading', { name: 'Our App' }),
            fastFeedback: this.page.getByRole('paragraph').filter({ hasText: 'Fast, Ai-Powered Feedback' }),
            personalFeed: this.page.getByRole('paragraph').filter({ hasText: 'Receive personalized feedback' }),
            anyAndAll: this.page.getByRole('paragraph').filter({ hasText: 'Track any and all jobs!' }),
            sortJob: this.page.getByRole('paragraph').filter({ hasText: 'Sort Job Application using' }),
            designAccessible: this.page.getByRole('paragraph').filter({ hasText: 'Designed to be accessible to' }),
            completelyFree: this.page.getByRole('paragraph').filter({ hasText: 'Completely Free!' }).locator('i'),

            // Your Average Job Tracker Facts
            theirApps: this.page.getByRole('heading', { name: 'Their Apps' }),
            tooBloated: this.page.getByRole('paragraph').filter({ hasText: 'Too bloated. Distracts you' }),
            unableTrack: this.page.getByRole('paragraph').filter({ hasText: 'Unable to track all important' }),
            notDesigned: this.page.getByRole('paragraph').filter({ hasText: 'Not designed with' }),
            focusedPromote: this.page.getByRole('paragraph').filter({ hasText: 'Focused on promoting' }),
            notTransparent: this.page.getByRole('paragraph').filter({ hasText: 'Not transparent regarding how' }),
            expensiveApp: this.page.getByText('Expensive! Their app is').nth(1),

            // CALL TO ACTION BUTTON
            callToAction: this.page.getByRole('button', { name: 'Try it now! →' })
        }
    }
}