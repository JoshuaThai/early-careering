"use client";

import styles from "../page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import {LoginButton} from "./loginProfile";
import { MenuModal } from "./modal";
import { useState } from "react";

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
};

interface NavBarProps {
  session: SessionData | null;
}

export function NavBar({session}:NavBarProps){
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div className={styles.navContainer}>
            <MenuModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <button className={styles.menuButton} aria-label="Menu" onClick={()=>{setModalOpen(true)}}>
                <FontAwesomeIcon icon={faBars} 
                className={styles.menuIcon} 
                size="lg"/>
            </button>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/somePage">Features</a>
                <a href="/somePage">About</a>
            </nav>
            <LoginButton showLogin={!session} />
        </div>
    )
}