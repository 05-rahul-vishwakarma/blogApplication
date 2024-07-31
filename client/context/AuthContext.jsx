/* eslint-disable react/prop-types */
// context/AuthContext.js
import axios from 'axios';
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Default value based on your auth logic

    useEffect(() => {
        const auth = async () => {
            let res = await axios.get('/isAuthenticated');
            if (res?.data?.status === 200) {
                setIsAuthenticated(true);
            }
        }
        auth();
    })


    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
