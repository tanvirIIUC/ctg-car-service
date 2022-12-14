import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../Firebase/Firebase.config';


export  const AuthContext = createContext();
const auth = getAuth(app);


const Authprovider = ({children}) => {
    const [user,setUser]= useState(null);
    const [loader,setLoader]= useState(true);
    //   create user 
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // log in
     const logIn= (email,password)=>{
         return signInWithEmailAndPassword(auth, email, password)
     }


    // check log in or not
   
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            
        });

        return () =>{
            return unsubscribe();
        }
    }, [])


    const authInfo ={
        user, 
        logIn,
        createUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;