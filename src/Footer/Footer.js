import React from 'react';
import style from './Footer.module.css'


export const Footer = () => {
    return (

        <div className={style.container}>
            <span className={style.title}><h2>Vlad Kravets</h2></span>
            <div className={style.footer}>
                <div className={style.footerItem}></div>
                <div className={style.footerItem}></div>
                <div className={style.footerItem}></div>
                <div className={style.footerItem}></div>
            </div>
            <span className={style.text}>© 2022 Все права защищены</span>
        </div>
    )
        ;
};

