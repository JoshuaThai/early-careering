import { Footer } from "../components/main";
import { Header } from "../components/main";
import { CallToAction } from "../homepageComponents";

import styles from "../page.module.css";
import aboutStyles from "./about.module.css";

function Story(){
    return(
        <article className={aboutStyles.story}>
            <div className={aboutStyles.storyContainer}>
                <img src="images/UpsetApplicant.jpg" className={aboutStyles.storyImage} 
                height={300} width={450}
                alt="An image that displays a frustrated job applicant." />
                <p>Hello! My name is Joshua 
                Thaisananikone. I am a recent graduate from the University of Wisconsin-Milwaukee. 
                I am the developer and founder of EarlyCareering. I created EarlyCareering after 
                having to go through the job search during my college years and my post-graduate 
                life. I remember being frustrated by how many tools I had to manage in order to track all of 
                the job applications I made. With how competitive the job market has become, I feel that job 
                applicants deserve to have a tool that will make their job search just a little less painful. 
                While there exist many other job trackers, I built this job tracker without all of the pain 
                points that comes with it such as lack of accessibility and a paywall. </p>
                <br />
                <p>I hope this job tracker aids you all in your job search journey. 
                    Feel free to follow my social media and view my other work in the links below:</p>
                <br />
                <div className={aboutStyles.socialLinks}>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/joshua-thaisananikone/" target="_blank">www.linkedin.com/in/joshua-thaisananikone/</a></p>
                    <p>Portfolio: <a href="https://joshuathai.github.io/Joshua-Portfolio/" target="_blank">joshuathai.github.io/Joshua-Portfolio/</a></p>
                    <p>GitHub: <a href="https://github.com/JoshuaThai" target="_blank">www.github.com/JoshuaThai</a></p>
                </div>
            </div>
        </article>
    )
};

function Hero(){
    return(
        <section className={aboutStyles.heroSection}>
            <div className={aboutStyles.circle}>
            </div>
            <div className={aboutStyles.circle2}>
            </div>
            <div className={aboutStyles.circle3}>
            </div>
            <div className={aboutStyles.circle4}>
            </div>
            <div className={aboutStyles.heroSectionTitles}>
                <h1>About</h1>
                <h2>The Story of EarlyCareering</h2>
            </div>
        </section>
    )
};

export default function About(){
    return(
        <div>
            <Header />
            <Hero />
            <Story />
            <CallToAction />
            <Footer />
        </div>
    )
};