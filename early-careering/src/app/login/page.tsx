import { authClient } from "@/lib/auth-client"; //import the auth client
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import styles from "../page.module.css";
import loginStyles from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "@/lib/sign-in";
import { LoginBox } from "./login";
import { Footer } from "../components/main";

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


export default function LoginPage() {
    return (
        <div className={styles.page}>
            <Header />
            <LoginBox />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    );
}