import React from 'react'
import styles from './Main.module.scss';
import photo from '../assets/images/photo1.png'
import {TypingEffect} from "../TypingText/Typing-effect";
import Button from "../common/button/Button";
import cv from '../assets/cv/cv.pdf'


function Main() {

    return (
        <div className={styles.mainBlock} id='home'>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    
                    <h5>Hello, my name is</h5>
                    <h1>Vladislav Kravets</h1>
                    <h5>I'm <TypingEffect/></h5>
                    <a href={cv} download={true}>
                        <Button title={'Download cv'}/>
                    </a>
                </div>
                <div className={styles.photo}>
                    <img src={photo} alt="it's me"/>
                </div>
            </div>
        </div>
    );
}

export default Main;