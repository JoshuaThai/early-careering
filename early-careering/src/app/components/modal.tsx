"use client";
import styles from "../page.module.css";
import {useState } from "react";

import { authClient } from "@/lib/auth-client";
import {useRouter} from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

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

function LogoutButton() {
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

    return (
        <button onClick={handleLogout}
        style={{color : "white", 
                        backgroundColor : "red", borderRadius: "16px"}}>Log Out</button>
    )

}

export function MenuModal({ modalOpen, setModalOpen, session }: 
    { modalOpen: boolean; 
        setModalOpen: (open: boolean) => void;
    session: SessionData}) {
    const [dropdown, showDropdown] = useState(false);
    // const [modal, setModal] = useState(false);

    // useEffect(() => {
    //     setModal(modalOpen);
    // }, [modalOpen]);

    return (
    <div className={styles.modalOverlay} 
    style={{ visibility: modalOpen ? 'visible' : 'hidden' }}>
        <div className={styles.modalBox}>
            <button className={styles.modalCloseButton}
            onClick={() => setModalOpen(false)}>X</button>
            <div className={styles.modalContent}>
                {/* The nav links when user is not logged in */}
                <nav className={styles.modalContentLinks} style={{display: session ? "none" : "flex"}}>
                    <a href="/">Home</a>
                    <a href="/features">Features</a>
                    <a href="/about">About</a>
                    <a href="/login">Login/Signup</a>
                </nav>
                <nav className={styles.modalContentLinks} style={{display: !session ? "none" : "flex"}}>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/contact">Contact</a>
                    <a href="/faqs">FAQs</a>
                    <button onClick={() => showDropdown(!dropdown)}>{session?.user?.name} {!dropdown ? "▶" : "▼"}</button>
                </nav>
                <nav className={styles.modalContentLinks} style={{display: dropdown ? "flex" : "none"}}>
                    <a href="/profile">Your Profile</a>
                    <a href="/contact">Privacy Policy</a>
                    {/* <a href="/" style={{color : "white", 
                        backgroundColor : "red", borderRadius: "16px"}}>Logout</a> */}
                    <LogoutButton />
                </nav>
            </div>
        </div>
    </div>
    )
};

export function MenuModalContainer(){
    const [modalOpen, setModalOpen] = useState(false);

    return(
        <div>
            {/* This part is the client-sided portion */}
            <MenuModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            <button className={styles.menuButton} aria-label="Menu" onClick={()=>{setModalOpen(true)}}>
                <FontAwesomeIcon icon={faBars} 
                className={styles.menuIcon} 
                size="lg"/>
            </button>
        </div>
    )
}