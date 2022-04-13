import React from 'react';
import styles from '../styles/Header.module.css'


const Header = () => {
    return (
        <header>
            <div className={styles.header}>
                <h1> CRUD - React </h1>
            </div>
        </header> 
    )
};

export default Header;