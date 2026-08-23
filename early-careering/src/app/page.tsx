"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


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
        <div className={styles.title}>
            <h1 className={styles.titleText}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
            <button className={styles.startNowButton}>Ready? Start Now!</button>
        </div>
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

function Features(){
    return (
        <div className={styles.feature}>
            <h3>Core Features</h3>
            <p>Description of Feature 1</p>
        </div>
    )
}

function ProductExplanation(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log("isModalOpen:", isModalOpen);
    return (
        <div className={styles.productExplanationContainer}>
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
        </div>
    )
};

function Header(){
    return (
        <div className={styles.header}>
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
                <button className={styles.loginButton}>Login/ Sign Up</button>
            </div>
        </div>
)};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Title title="EarlyCareering" 
      subtitle="Your career starts here! Track your job search progress and achieve your goals." />
      <ProductExplanation />
    </div>
)};