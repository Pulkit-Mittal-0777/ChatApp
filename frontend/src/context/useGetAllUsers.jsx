import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useAuth } from "./AuthProvider";
function useGetAllUsers() {
    // console.log("hi")
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [authUser, setAuthUser] = useAuth();
   
    
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const token = Cookies.get("jwt");
                // console.log(token);
                const response = await axios.get("/api/alluser", {
                    credentials: "include",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log(token);
                console.log(response);
                setAllUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error in useGetAllUsers: " + error);
            }
        };
        getUsers();
    }, []);
    return [allUsers, loading];
}

export default useGetAllUsers;