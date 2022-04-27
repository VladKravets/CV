import React from 'react';
import style from './Contacts.module.css'
import styleContainer from '../comman/styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.container} ${styleContainer.container}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="#" className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea/>
                <button type={'submit'} className={style.button}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

