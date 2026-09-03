"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClipboard, 
    IconDefinition, faMagnifyingGlassChart, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Footer } from "./components/main";


function CallToAction(){
    return(
        <section className={styles.callToAction}>
            <h2>Ready to take control of your job search? Try out EarlyCareering yourself!</h2>
            <button className={styles.tryNowButton}>Try it now! &rarr;</button>
        </section>
    )
};

function Modal({ modalOpen, setModalOpen }: 
    { modalOpen: boolean; 
        setModalOpen: (open: boolean) => void }) {
    return (
    <div className={styles.modalOverlay} 
    style={{ visibility: modalOpen ? 'visible' : 'hidden' }}>
        <div className={styles.modalBox}>
            <button className={styles.modalCloseButton}
            onClick={() => setModalOpen(false)}>X</button>
            <div className={styles.modalContent}>
                <img src="/images/GeneralIdea.png" alt="Confusion" 
                className={styles.productExplanationImageModal}></img>
            </div>
        </div>
    </div>
    )
};

function Title({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <section className={styles.title}>
            <h1 className={styles.titleText}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <button className={styles.startNowButton}>Ready? Start Now!</button>
        </section>
    )
};

function Quote({ quote, author }: { quote: string; author: string }) {
    return (
        <div className={styles.quote}>
            <br />
            <p className={styles.quoteText}>"{quote}"</p>
            <p className={styles.quoteAuthor}>- {author}</p>
        </div>
    )
}

function FeatureBox({ title, description, 
    imageName, backgroundColor, iconColor}: { title: string; description: string; 
        imageName: IconDefinition; backgroundColor: string; iconColor: string }) {
    return (
        <div className={styles.featureBox} style={{ backgroundColor }}>
            <div className={styles.featureBoxContent}>
                <h3>{title}</h3>
                <FontAwesomeIcon icon={imageName} 
                className={styles.featureImage} size="2x" style={{ color: iconColor }} />
                {/* <img src={imageSrc} alt={title} className={styles.featureImage} /> */}
                <p>{description}</p>
            </div>
        </div>
 )
};

function Features(){
    return (
        <section className={styles.feature}>
            <h2>Core Features</h2>
            <div className={styles.featureBoxesContainer}>
                <FeatureBox 
                    title="Track Job Applications" 

                    description={"Manually add jobs to the " + 
                    "job tracker with their description," +
                    " organize the jobs by most desired roles, " +
                    "track the application's status and more!"
                    }

                    imageName={faClipboard} 
                    backgroundColor="rgba(39, 79, 159, 1)" 
                    iconColor="orange" />
                    <FeatureBox 
                    title="Analyze Job Search using AI" 
                    
                    description="Let our AI analyze all of your tracked jobs to offer guidance on optimizing your job search. Also, leverage our AI to optimize your interview preparation for specific roles! "

                    imageName={faMagnifyingGlassChart} 
                    backgroundColor="rgba(26, 45, 82, 1)" 
                    iconColor="lightblue" />
                    <FeatureBox 
                    title="Export Job Search Data" 
                    
                    description={"Want to use our systems only for tracking?" + 
                    " No problem! Our application also allows for you to export your data in " + 
                    "many formats such as .csv, .xlsx, and more! "
                    }

                    imageName={faFileExport} 
                    backgroundColor="rgba(0, 50, 149, 1)" 
                    iconColor="white" />
            </div>
            <button className={styles.viewAllFeatures}>View all Features Here &rarr;</button>
        </section>
    )
}

function ProductExplanation(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    // console.log("isModalOpen:", isModalOpen);
    return (
        <section className={styles.productExplanationContainer}>
            < Modal modalOpen={isModalOpen} setModalOpen={setIsModalOpen} />
            <div className={styles.productExplanation}>
                <h2 style={{ fontSize: '2.4em', margin: '10px 0' }}>What on Earth is EarlyCareering?</h2>
                <p className={styles.productExplanationText}>EarlyCareering is a all-in-one platform that helps you track your 
                    job search progress and achieve your career goals.</p>
                <p className={styles.productExplanationText}>Gone are the days of juggling multiple tools like Linkedin, Glassdoor, and spreadsheets. 
                    With EarlyCareering, you can manage your entire job search in one place.</p>
                <br />
                <img src="/images/GeneralIdea.png" alt="Confusion" 
                className={styles.productExplanationImage}
                onClick={() => setIsModalOpen(true)}></img>
                <br />
                <p style={{ fontWeight: 'bold', fontSize: '2.4em' }}> No more of this:</p>
                <Quote quote="I have no idea where I am in the job search process." author="Anonymous"/>
                <Quote quote="I have no idea what I need to do next." author="Anonymous"/>
                <Quote quote="I have no idea what my goals are." author="Anonymous"/>
            </div>
        </section>
    )
};

function Header(){
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><a href="/">EarlyCareering</a></h1>
            <div className={styles.navContainer}>
                <button className={styles.menuButton} aria-label="Menu">
                    <FontAwesomeIcon icon={faBars} 
                    className={styles.menuIcon} 
                    size="lg"/>
                </button>
                <nav className={styles.nav}>
                    <a href="/">Home</a>
                    <a href="/somePage">Features</a>
                    <a href="/somePage">About</a>
                </nav>
                <a href="/login" className={styles.loginButton}>Login/ Sign Up</a>
            </div>
        </header>
)};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Title title="EarlyCareering" 
      subtitle="Your career starts here! Track your job search progress and achieve your goals." />
      <ProductExplanation />
      <Features />
      <CallToAction />
      <Footer />
    </div>
)};