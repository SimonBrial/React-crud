import React, { createContext } from 'react';

const initialState = {
    task: [
        {
            id: 1,
            nombre: 'Simon',
            apellido: 'Briceño',
            telefono: '62849562',
            genero: 'Masculino',
            edad: 20,
            pais: 'Venezuela'
        },
        {
            id: 2,
            nombre: 'maria',
            apellido: 'hernandez',
            telefono: '4856972',
            genero: 'Feminino',
            edad: 22,
            pais: 'Canada'
        }
    ]
}; 

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {

    const addTask = () => {
        console.log('añadiendo un task')
    };

    return (
        <GlobalContext.Provider value={{ ...initialState, addTask }}>
            {children}
        </GlobalContext.Provider>
    )
};