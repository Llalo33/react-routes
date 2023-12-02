import React from 'react';
import styles from './Body.module.css'

const Body = () => {
    return (
        <div className={styles.bodySquare}>
            <div className={styles.bodyCont}>
                <div className={styles.contPage}>
                    <h1>Cover your page.</h1>
                </div>
                <div className={styles.contText}>
                    <b>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</b>
                </div>
                <div className={styles.contBut}>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Body;