"use client";
import styles from "../page.module.css";
import { useState } from "react";

export function MenuModal({ modalOpen, setModalOpen }: 
    { modalOpen: boolean; 
        setModalOpen: (open: boolean) => void }) {
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
                <nav className={styles.modalContentLinks}>
                    <a href="/">Home</a>
                    <a href="/">Features</a>
                    <a href="/">About</a>
                    <a href="/login">Login/Signup</a>
                </nav>
            </div>
        </div>
    </div>
    )
};