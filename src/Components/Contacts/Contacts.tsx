import React from 'react';
import '../../App.css';
import styles from './Contacts/../Contacts.module.css';



function Contacts() {

    let Friends = {
        name: 'Yusov Dmitry'
    }

    return (
        <div>
            <h4 className={styles.conteiner_header}>{Friends.name}</h4>
        </div>
    );
}

export default Contacts;
