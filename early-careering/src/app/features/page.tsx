import { Footer } from "../components/main";
import { Header } from "../components/main";
import { CallToAction } from "../homepageComponents";

import styles from "../page.module.css";
import featureStyles from "./features.module.css";


function Title({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <section className={featureStyles.featuresTitle}>
            <h1 className={styles.titleText}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </section>
    )
};


interface FeaturesCardProps{
    title: String
    isEarly: Boolean
}

function FeaturesCard({
    title, 
    isEarly
}: FeaturesCardProps){
    return(
        <div className={featureStyles.featuresCard}>
            <div className={featureStyles.featuresCardContainer} style={{
                backgroundColor: isEarly ? "#163F98" : "#D81515",
                boxShadow: isEarly ? "0px 0px 10px 2px #5E81CF" : "0px 0px 10px 2px #FC9898"}}>
                <div className={featureStyles.featuresCardInnerContainer}>
                    <h2>{title}</h2>
                    <div 
                    className={featureStyles.featuresCardInfo} style={{display: isEarly ? "flex" : "none" }}>
                        <p><b><i>Fast</i></b>, Ai-Powered Feedback that includes job interview 
                        tips, job search evaluation and more.</p>
                        <p>Receive <b><i>personalized</i></b> feedback on your job search!</p>
                        <p>Track <b><i>any and all</i></b> jobs!</p>
                        <p><b><i>Sort</i></b> Job Application using tags</p>
                        <p>Designed to be <b><i>accessible</i></b> to all job 
                        search applicants, including the people with permanent, temporary, or situational disabilities</p>
                        <p><b><i>Completely Free!</i></b></p>
                        <br />
                    </div>
                    <div 
                    className={featureStyles.featuresCardInfo} style={{display: !isEarly ? "flex" : "none" }}>
                        <p><b><i>Too bloated.</i></b> Distracts you from tracking jobs.</p>
                        <p><b><i>Unable</i></b> to track all important job information 
                        such as the job description, salary information, and applicant requirements.</p>
                        <p><b><i>Not designed</i></b> with accessibility in mind!</p>
                        <p>Focused on <b><i>promoting</i></b> companies instead of you.</p>
                        <p><b><i>Not transparent</i></b> regarding how they handle your job search data!</p>
                        <p><b><i>Expensive! Their app is focused on monetization!</i></b></p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

function FeaturesGrid(){
    return(
        <section className={featureStyles.featuresGrid}>
            <p className={featureStyles.featuresHeading}>EarlyCareering</p>
            <p className={featureStyles.featuresVersus}>VS.</p>
            <p className={featureStyles.featuresHeading}>Your Average Job Tracker</p>
            <FeaturesCard title = "Our App" isEarly = {true}/>
            <div></div>
            <FeaturesCard title= "Their Apps" isEarly = {false}/>
        </section>
    )
};

export default function Features(){

    return(
        <section>
            <Header />
            <Title title="Features" subtitle="What does EarlyCareering have in store for me??" />
            <br />
            <FeaturesGrid />
            {/* <FeaturesCards /> */}
            <br />
            <CallToAction />
            <Footer />
        </section>
    )
};