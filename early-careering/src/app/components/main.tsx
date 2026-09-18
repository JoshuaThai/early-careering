// This will contain the main component that will be used in the app. 
// It will contain the header and the footer of the app.

import styles from "../page.module.css";

import { NavBar } from "./navBar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <section className={styles.footer}>
            <div className={styles.footerLogoContainer}>
                <h1 className={styles.logo}><a href="/">EarlyCareering</a></h1>
                <nav className={styles.footerNav}>
                    <a href="/">Home</a>
                    <a href="/somePage">Features</a>
                    <a href="/somePage">About</a>
                    <a href="/somePage">Contact</a>
                </nav>
            </div>
            <footer>&copy; {currentYear} EarlyCareering. All rights reserved.</footer>
        </section>
    )
}


export async function Header(){
    // var showLogin = true;
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    // if (session) {
    //     showLogin = false;
    //     console.log(showLogin);
    // }
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}><a href="/">EarlyCareering</a></h1>
            <NavBar session={session}/>
        </header>
)};