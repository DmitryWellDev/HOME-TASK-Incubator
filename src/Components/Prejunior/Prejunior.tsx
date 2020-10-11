import React, {useState} from "react";
import Contacts from "../Contacts/Contacts";
import Content from "../Content/Content";
import Priorities from "../Priorities/Priorities";
import Greet from "../Greet/Greet";
import styles from './Prejunior.module.css'
import EditableSpan from "../Common/EditableSpan/EditableSpan";


function Prejunior() {

    return (
        <div className={styles.PreJuniorContent_wrap}>
            <span className={styles.title}>Monday</span>
            <div className='message_conteiner'>
                <Contacts/>
                <Content/>
            </div>
            <Priorities/>
            <Greet/>
        </div>
    )
}

export default Prejunior

