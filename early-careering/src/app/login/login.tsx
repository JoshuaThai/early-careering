"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import styles from "../page.module.css";
import loginStyles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use, useState } from "react";
import { signIn } from "@/lib/sign-in";
import { SignUpBox, SignUpSwitch } from "./signUp";
import { redirect } from "next/navigation";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleLogin = async() =>{
        await authClient.signIn.email(
        {
            email: email,
            password: password,
        },
        {
            onRequest: () => {
            // Turn on your loading spinner
            },
            onError: (ctx) => {
            // Access the message securely from the context object
            setError(ctx.error.message); 
            },
            onSuccess: () => {
            // Route user to dashboard
            redirect("/dashboard");
            }
        }
);

    }
    return (
        <div className={loginStyles.formContainer}>
            <h2>Login</h2>
            <p className={loginStyles.errorMessage}>{error}</p>
            <br />
            <form className={loginStyles.loginForm} action={handleLogin}>
                <div className={loginStyles.formGroup}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" 
                    className={loginStyles.formFields} required 
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" 
                    className={loginStyles.formFields} required 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br />
                <button type="submit" className={loginStyles.submitButton}>Login</button>
            </form>
        </div>
    );
}