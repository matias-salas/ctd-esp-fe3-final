import React, { createContext, useEffect, useReducer, useState } from 'react';
import { GetUsers } from '../helpers/GetUsers';

export const AppContext = createContext();

export const initialState = { theme: !!localStorage.theme, favs: localStorage.favs ? JSON.parse(localStorage.favs) : [] }

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [dentist, setDentist] = useState([]);

    useEffect(() => {
        GetUsers("https://jsonplaceholder.typicode.com/users", setLoading, setUsers);
    }, []);

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
                return state; // Return the unchanged state for unknown actions
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const validateForm = (params) => {
        return ValidateForm(params);
    }

    return (
        <AppContext.Provider value={{ users, loading, setLoading, state, dispatch, getDentist, setDentist, dentist, validateForm }}>
            {children}
        </AppContext.Provider>
    );
};

