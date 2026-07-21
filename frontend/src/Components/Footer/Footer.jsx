import styles from "../Footer/Footer.module.css";


function Footer() {
    return (
    <>
        <footer className={styles.footer}>
            <span className={styles.heading}> ZenTask</span>
        

            <div className={styles.links}>
                <a href="#"> Privacy</a>
                <a href="#"> Terms</a>
                <a href="#"> Support </a>
            </div>

            <span className={styles.copy}>
                2024 ZenTask. All rights are reserved.
            </span>

        </footer>

    </>
        
    );
}
export default Footer;
