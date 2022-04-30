import React from 'react'
import styles from './Footer.module.scss';
import lincedIn from '../assets/images/footer/linkedin.png'
import gmail from '../assets/images/footer/gmail.png'
import telegram from '../assets/images/footer/telegram.png'
import gitHub from '../assets/images/footer/github-sign.png'

function Footer() {
    const lincedInStyle = {
        backgroundImage: `url(${lincedIn})`,
    };
    const gmailStyle = {
        backgroundImage: `url(${gmail})`,
    };
    const telegramStyle = {
        backgroundImage: `url(${telegram})`,
    };
    const gitHubStyle = {
        backgroundImage: `url(${gitHub})`,
    };

    return (
        <div className={styles.footerBlock}>
            <div className={styles.footerContainer}>
                <h2>Vladislav Kravets</h2>
                <div className={styles.items}>
                    <a href="https://www.linkedin.com/in/vladkravets/" target="_blank">
                        <div style={lincedInStyle} className={styles.item}></div>
                    </a>
                    <a href="https://github.com/VladKravets" target="_blank">
                        <div style={gitHubStyle} className={styles.item}></div>
                    </a>
                    <a href="https://t.me/vladkravets" target="_blank">
                        <div style={telegramStyle} className={styles.item}></div>
                    </a>
                    <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank">
                        <div style={gmailStyle} className={styles.item}></div>
                    </a>
                </div>
                <div className={styles.copyright}>©2022
                    All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer;