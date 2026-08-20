import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";


function Title() {
    return (
        <div className={styles.title}>
            <h1 className={styles.titleText}>EarlyCareering</h1>
            <p className={styles.subtitle}>Your career starts here! Track your progress and achieve your goals.</p>
        </div>
    )
};

function Header(){
    return (
        <div className={styles.header}>
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
                <button className={styles.loginButton}>Login/ Sign Up</button>
            </div>
        </div>
)};

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Title />
    </div>
)};