import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.headCover}>
                    <h2>Cover</h2>
                </div>
                <div className={styles.headMenu}>
                    <a href='/'>Home</a>
                    <a href='/'>Features</a>
                    <a href='/'>Contact</a>
                </div>
            </div>
        </div>
    );
};

export default Header;