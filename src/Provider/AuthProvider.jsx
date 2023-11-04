import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import PropTypes from 'prop-types';
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email,password);
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , currentUser =>{

            const UserEmail = currentUser?.email || user?.email
            const loggedUser = {email : UserEmail};

            setUser(currentUser);
            console.log("currentUser ", currentUser)
            setLoading(false);

            if(currentUser){    
                axios.post("http://localhost:5000/jwt", loggedUser, {withCredentials: true})
                .then(res =>{
                    console.log("token response ", res.data)
                })
            }
            else{
                axios.post("http://localhost:5000/logout", loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data)
                })
            }
        })
        return ()=>{
            return unSubscribe();
        }
    },[])

    const authValue = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;