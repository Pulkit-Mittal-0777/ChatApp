import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie"; 

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
const AuthProvider = ({ children }) => {
    // children is the different components where we have to use authUser state
    // Retrieve the initial user state from cookies or localStorage
    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp");

    // Parse the user data and store it in the state
    const [authUser, setAuthUser] = useState(
        initialUserState ? JSON.parse(initialUserState) : undefined
    );

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
