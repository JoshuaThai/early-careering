"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import styles from "../page.module.css";
import loginStyles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { signIn } from "@/lib/sign-in";
import { SignUpBox, SignUpSwitch } from "./signUp";

export function LoginBox(){
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

function LoginForm(){
    return (
        <div className={loginStyles.formContainer}>
            <h2>Login</h2>
            <br />
            <form className={loginStyles.loginForm} action={signIn}>
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