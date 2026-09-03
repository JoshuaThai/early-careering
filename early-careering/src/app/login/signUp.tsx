"use client";

import { authClient } from "@/lib/auth-client"; //import the auth client
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import styles from "../page.module.css";
import loginStyles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { signIn } from "@/lib/sign-in";

export function SignUpSwitch({ isLogin, setIsLogin }: 
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


export function SignUpBox(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);

    const handleSignUp = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { data, error } = await authClient.signUp.email({
                email, // user email address
                password, // user password -> min 8 characters by default
                name, // user display name
                callbackURL: "/dashboard" // A URL to redirect to after the user verifies their email (optional)
            }, {
                onRequest: (ctx) => {
                    //show loading
                },
                onSuccess: (ctx) => {
                    //redirect to the dashboard or sign in page
                },
                onError: (ctx) => {
                    // display the error message
                    alert(ctx.error.message);
                },
        });
    };

    const evaluatePassword = (password: string) => {
        setPassword(password);
        if(password.length >= 10 && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordValid(true);
        } else {
            setPasswordValid(false);
        }
    };

    const verifyPassword = (confirmPassword: string) => {
        if(confirmPassword !== password) {
            setConfirmPassword(false);
        } else{
            setConfirmPassword(true);
        }
    };

    
    return (
        <div>
            <h2>Sign Up</h2>
            <br />
            <form className={loginStyles.loginForm} method="POST" onSubmit={handleSignUp}>
                <div className={loginStyles.formGroup}>
                    <label htmlFor="email">Email</label><br />
                    <input type="email" id="email" name="email" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id="password" name="password" 
                    className={loginStyles.formFields} onChange={(e) => evaluatePassword(e.target.value)}
                    required />
                    {/* Password validation messages */}
                    <p className={loginStyles.passwordValidation}
                    style={{ color: password.length >= 10 ? 'green' : 'red'}}
                    >{password.length >= 10 ? '✔' : '✖'} Minimum 10 characters</p>
                    <p className={loginStyles.passwordValidation}
                    style={{ color: passwordValid ? 'green' : 'red'}}
                    >{passwordValid ? '✔' : '✖'} A special character (#$%.!)</p>
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="confirm-password">Confirm Password</label><br />
                    <input type="password" id="confirm-password" name="confirm-password" 
                    className={loginStyles.formFields} onChange={(e) => verifyPassword(e.target.value)}
                    required />
                    <p className={loginStyles.passwordValidation}
                    style={{ color: confirmPassword ? 'green' : 'red'}}
                    >{confirmPassword ? '✔ The passwords match' : '✖ The passwords must match'} </p>
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="first-name">First Name</label><br />
                    <input type="text" id="first-name" name="first-name" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <div className={loginStyles.formGroup}>
                    <label htmlFor="phone-number">Phone Number</label><br />
                    <input type="text" id="phone-number" name="phone-number" 
                    className={loginStyles.formFields} required />
                </div>
                <br />
                <button type="submit" className={loginStyles.submitButton}>Sign Up</button>
            </form>
        </div>
    );
}