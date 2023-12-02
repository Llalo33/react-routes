import React from 'react';
import styles from './Footer.module.css'

const Footers = () => {
    return (
        <div className={styles.footCont}>
            <div className={styles.footAuthor}>
                <div className={styles.authText}>Cover template for<a href='/'>Bootstrap</a>, by <a href='/'>@mdo</a></div>
            </div>
        </div>
    );
};

export default Footers;