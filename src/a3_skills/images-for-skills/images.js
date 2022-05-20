import React from "react";
import styles from "../Skills.module.scss";
import reactLogo from "../../assets/images/skills/react.png";
import Redux from "../../assets/images/skills/Redux.png.crdownload";
import restAPI from "../../assets/images/skills/restAPI.png";
import typeScript from '../../assets/images/skills/typescript.png'
import javaScript from '../../assets/images/skills/js.png'
import HTML5 from '../../assets/images/skills/html-5.png'
import CSS3 from '../../assets/images/skills/css.png'
import Unit from '../../assets/images/skills/unit.png'
import Snapshot from '../../assets/images/skills/snapshot.png'
import Storybook from '../../assets/images/skills/storybook.png'
import postman from '../../assets/images/skills/postman.png'
import materialUI from '../../assets/images/skills/matUI.png'
import antDesign from '../../assets/images/skills/ant-design.png'

export const imagesDevBlock = [
    <div className={styles.devImgBlock}>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={reactLogo} alt={'React'}/>
            <div className={styles.description}>React</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={Redux} alt={'Redux'}/>
            <div className={styles.description}>Redux</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={restAPI} alt={'Rest API'}/>
            <div className={styles.description}>Rest API</div>
        </div>
    </div>
]
export const imagesFoundBlock = [
    <div className={styles.devImgBlock}>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={typeScript} alt={'TypeScript'}/>
            <div className={styles.description}>TypeScript</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={javaScript} alt={'javaScript'}/>
            <div className={styles.description}>JavaScript</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={HTML5} alt={'HTML5'}/>
            <div className={styles.description}>HTML5</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={CSS3} alt={'CSS3'}/>
            <div className={styles.description}>CSS3</div>
        </div>
    </div>
]
export const imagesTestBlock = [
    <div className={styles.devImgBlock}>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={Unit} alt={'Unit'}/>
            <div className={styles.description}>Unit-tests</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={Snapshot} alt={'Snapshot'}/>
            <div className={styles.description}>Snapshot</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={Storybook} alt={'Storybook'}/>
            <div className={styles.description}>Storybook</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={postman} alt={'postman'}/>
            <div className={styles.description}>Postman</div>
        </div>
    </div>
]
export const imagesDesignBlock = [
    <div className={styles.devImgBlock}>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={materialUI} alt={'materialUI'}/>
            <div className={styles.description}>Material UI</div>
        </div>
        <div className={styles.item}>
            <img className={styles.skillLogo} src={antDesign} alt={'antDesign'}/>
            <div className={styles.description}>Ant Design</div>
        </div>

    </div>
]