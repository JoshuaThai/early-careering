import styles from "../page.module.css";

// We are having this disappear so we can add a profile button, which will
// allow users to edit their profile and log out when needed.
export function LoginButton(){
    return(
        <div className={styles.loginButton}>
            <a href="/login">Login/ Sign Up</a>
        </div>
    )
};