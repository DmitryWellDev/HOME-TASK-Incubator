import React from 'react';
import '../../App.css';
import styles from './Content.module.css';



function Content() {

    let Post = {
        message: "What's up Bro?"
    }

    return (
        <div>
            <div className={styles.content_wrap}>
                <p className={styles.content_text}><span className={styles.content_elem}>{Post.message}</span></p>
                <time className={styles.content_time}>15:00</time>
            </div>
            <div className={styles.contact_photo}>
            </div>
        </div>
    );
}

export default Content;
