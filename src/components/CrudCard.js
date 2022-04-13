import React from 'react';
import styles from '../styles/CrudCard.module.css'

const CrudCard = () => {
    return (
        <div className={styles.containerCard}>
            <h1>Datos de Usuarios</h1>
            <div className={styles.containCard}>
                <p>Aqui va el cuadro de datos de los usuarios</p>
            </div>
        </div>
    )
};

export default CrudCard