"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import styles from "../page.module.css";
import loginStyles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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

function SignUpSwitch({ isLogin, setIsLogin }: 
    { isLogin: boolean, setIsLogin: (value: boolean) => void }) {
    return (
        <div className={loginStyles.signUpSwitch}>
            <button style={{ backgroundColor: isLogin ? 'black' : '#D9D9D9', 
                color: isLogin ? 'white' : 'black' }} onClick={() => setIsLogin(true)}>Login</button>
            <button style={{ backgroundColor: !isLogin ? 'black' : '#D9D9D9', 
                color: !isLogin ? 'white' : 'black' }} onClick={() => setIsLogin(false)}>Sign Up</button>
        </div>
    );
}

function SignUpBox(){
    return (
        <div>
            <h2>Sign Up</h2>
            <br />
            <form className={loginStyles.loginForm} action="/api/signup" method="POST">
                <div className={loginStyles.formGroup}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="first-name">First Name</label><br />
                    <input type="text" id="first-name" name="first-name" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <button type="submit" className={loginStyles.submitButton}>Sign Up</button>
            </form>
        </div>
    );
}

function LoginForm(){
    return (
        <div className={loginStyles.formContainer}>
            <h2>Login</h2>
            <br />
            <form className={loginStyles.loginForm} action="/api/login" method="POST">
                <div className={loginStyles.formGroup}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <button type="submit" className={loginStyles.submitButton}>Login</button>
            </form>
        </div>
    );
}

function LoginBox(){
    const [isLogin, setIsLogin] = useState(true);
    return (
        <section className={loginStyles.loginSection}>
            <div className={loginStyles.loginBox}>
                <SignUpSwitch isLogin={isLogin} setIsLogin={setIsLogin} />
                {isLogin ? <LoginForm /> : <SignUpBox />}
            </div>
        </section>
    );
}


export default function LoginPage() {
    return (
        <div className={styles.page}>
            <Header />
            <LoginBox />
        </div>
    );
}