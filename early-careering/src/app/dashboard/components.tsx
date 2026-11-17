"use client";
import styles from "./dashboard.module.css";
import { useState } from "react";

export function Hero({name}:{name: string}){
    return(
        <section className={styles.heroSection}>
            <div className={styles.circle}>
            </div>
            <div className={styles.heroSectionTitles}>
                <h1 id={"heroTitle"}>Welcome, {name}!</h1>
            </div>
        </section>
    )
}

export function TrackerButtons(){

    return(
        <div className={styles.trackerButtonsContainer}>
            <section className={styles.trackerButtonsInnerContainer}>
                <button className={styles.trackerButtons}>Add a Job</button>
                <button className={styles.trackerButtons}>View Job Search Stats</button>
                <button className={styles.trackerButtons}>Ask EarlyBot</button>
                <button className={styles.trackerButtons}>Generate Resume & Cover Letters</button>
            </section>
        </div>
    )
}

export function TableButtons(){

    return(
        <div className={styles.tableButtonsContainer}>
            <div className={styles.tableButtonsSelection}>
                <select>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Awaiting Decision</option>
                    <option>Decision Made</option>
                    <option>Archived</option>
                </select>
            </div>
            <br />
            <div className={styles.tableButtonsInnerContainer}>
                <button>Applied</button>
                <button>Interviewing</button>
                <button>Awaiting Decision</button>
                <button>Decision Made</button>
                <button>Archived</button>
            </div>
            <div className={styles.tableButtonsInnerContainer2}>
                <select>
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
                {/* <select>
                    <option>Yes</option>
                </select> */}
            </div>
        </div>
    )
}