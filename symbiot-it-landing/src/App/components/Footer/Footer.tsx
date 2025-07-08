import React from 'react';
import styles from './Footer.module.css';
import content from './Footer_content.json'

const Footer = () => <footer className={styles.footer}>
    <div className={styles.container}>
        <div className={styles.row}>
            <div className={styles.col}>
                <h4>Symbiot.it</h4>
                <p>{ content.phrase }</p>
            </div>
            <div className={styles.col}>
                <h4>Linki</h4>
                <ul>
                    <li><a href="/platforma"> Platforma </a></li>
                    <li><a href="/wycena"> Wycena </a></li>
                    <li><a href="/symdolce"> SymDolce </a></li>
                    <li><a href="/kontakt"> Kontakt </a></li>
                </ul>
            </div>
            <div className={styles.col}>
                <h4>Kontakt</h4>
                <p>Email: { content.contact.email }</p>
                <p>Telefon: { content.contact.phone }</p>
            </div>
        </div>
        <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} { content.copyright }</p>
        </div>
    </div>
</footer>

export default Footer;
