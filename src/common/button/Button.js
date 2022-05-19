import React from 'react'
import styles from './Button.module.scss';


function Button({title, click}) {
    return <button className={styles.cta} onClick={click}>
        <span>{title}</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
    </button>
}

export default Button;


