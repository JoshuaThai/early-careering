"use client";

import styles from "../page.module.css";
import navStyles from "./css/navBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
// import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import {LoginButton} from "./loginProfile";
import { MenuModal } from "./modal";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import {useRouter} from "next/navigation";

type SessionData = {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
    user: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        emailVerified: boolean;
        name: string;
        image?: string | null | undefined;
        phoneNumber: string;
        careerJourney: string;
        industry: string;
    };
};


interface NavBarProps {
  session: SessionData | null;
}

function ProfileButton({session}: {session: SessionData}){

    const router = useRouter();

    async function handleLogout() {
        await authClient.signOut({
            fetchOptions: {
            onSuccess: () => {
                router.push("/login");
            },
            },
        });
    }

    const user = session.user;
    return(
        <div className={navStyles.dropdown}>
            <button id={"profileDropdown"}
            className={`${navStyles.profileButton} ${navStyles.dropBtn}`}>
                {user?.name} &#x25BC;
            </button>
              <div className={navStyles.dropdownContent}>
                <a href="/profile">Your Profile</a>
                <a href="/terms">Terms & Conditions</a>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
};

export function NavBar({session}: NavBarProps){
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className={styles.navContainer}>
            <MenuModal modalOpen={modalOpen} setModalOpen={setModalOpen} session={session} />
            <button className={styles.menuButton} aria-label="Menu" onClick={()=>{setModalOpen(true)}}>
                <FontAwesomeIcon icon={faBars} 
                className={styles.menuIcon} 
                size="lg"/>
            </button>
            <nav className={styles.nav}>
                <a href="/" style ={{display: !session ? "flex" : "none"}}>Home</a>
                <a href="/features" style ={{display: !session ? "flex" : "none"}}>Features</a>
                <a href="/about" style ={{display: !session ? "flex" : "none"}}>About</a>
                <a href="/dashboard" style ={{display: session ? "flex" : "none"}}>Dashboard</a>
                <a href="/contact" style ={{display: session ? "flex" : "none"}}>Contact</a>
                <a href="/faqs" style ={{display: session ? "flex" : "none"}}>FAQs</a>
            </nav>
            {!session ? <LoginButton /> : <ProfileButton session ={session} /> }
            {/* <LoginButton showLogin={!session} /> */}
            {/* <ProfileButton showButton={!session} /> */}
        </div>
    )
}