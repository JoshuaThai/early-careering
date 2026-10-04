import styles from "./dashboard.module.css"

export function Hero({name}:{name: string}){
    return(
        <section className={styles.heroSection}>
            <div className={styles.circle}>
            </div>
            <div className={styles.heroSectionTitles}>
                <h1>Welcome, {name}!</h1>
            </div>
        </section>
    )
}