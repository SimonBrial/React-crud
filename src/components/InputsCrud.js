import React, { useState, useContext } from 'react';
import { GlobalContext, addTask } from '../context/GlobalContext'
import styles from '../styles/InputsCrud.module.css'

const InputsCrud = () => {

    const { addTask } = useContext(GlobalContext);

    const [input, setInput] = useState({
        name: '',
        apellido: '',
        telefono: '',
        genero: '',
        edad: '',
        pais: ''
    });

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({...input, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        addTask();
    };

    return (
        <div className={styles.containerInputs}>
            <h1>Inputs de usuarios</h1>
            <div >
                <form className={styles.containForm} onChange={handleSubmit}>
                    <div className={styles.divInputs}>
                        <div className={styles.inputs}>
                            <label>Nombre</label>
                            <input 
                                type="text" placeholder='Nombre'
                                onChange={handleChange}
                                >
                            </input>
                        </div>
                        <div className={styles.inputs}>
                            <label>Apellido</label>
                            <input 
                                type="text" placeholder='Apellido'>
                            </input> 
                        </div>
                    </div>
                    <div className={styles.divInputs}>
                        <div className={styles.inputs}>
                            <label>Telefono</label>
                            <input 
                                type="tel" placeholder='Telefono'>
                            </input>
                        </div>
                        <div className={styles.inputs}>
                            <label>Genero</label>
                            <select>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.divInputs}>
                        <div className={styles.inputs}>
                            <label>Edad</label>
                            <input 
                                type="number"
                                min="0"
                                max="100"
                                placeholder="Edad"></input>
                        </div>
                        <div className={styles.inputs}>
                            <label>Pais</label>
                            <input type="text" placeholder="Pais"></input>
                        </div>
                    </div>
                    <input type="Submit" value="Submit" className={styles.submit}></input>
                </form>
            </div>
        </div>
    )
};

export default InputsCrud;