import React, { createContext, useEffect, useReducer, useState } from 'react';

// Crea un contexto llamado AppContext.
export const AppContext = createContext();

// Defino un estado inicial para la aplicación que incluye el tema y los favoritos del usuario.
export const initialState = {
    theme: localStorage.getItem("theme") === "true",
    favs: localStorage.favs ? JSON.parse(localStorage.favs) : [],
  };
  
// Defino un componente proveedor llamado Context que toma "children" como prop.
export const Context = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [dentist, setDentist] = useState([]);

    const getDentist = async (id) => {
        try {
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            localStorage.setItem("dentist", JSON.stringify(data));
            setLoading(false);
        } catch (error) {
            throw new Error(`Hubo un error al realizar la consulta a la api: ${`https://jsonplaceholder.typicode.com/users/${id}`} \n${error}`);
        }
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'toggle':
                return { ...state, theme: !state.theme };
            case 'add':
                return { ...state, favs: [...state.favs, action.payload] };
            case 'remove':
                return { ...state, favs: state.favs.filter(dentist => dentist.id !== action.payload.id) };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)


    // Integra la función GetUsers en el useEffect del componente.
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                throw new Error(`Hubo un error al realizar la consulta a la API: https://jsonplaceholder.typicode.com/users \n${error}`);
            }
        };
        fetchUsers();
    }, []);

    return (
        <AppContext.Provider value={{ users, loading, setLoading, state, dispatch, getDentist, setDentist, dentist }}>
            {children}
        </AppContext.Provider>
    );
};
