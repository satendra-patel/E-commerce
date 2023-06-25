import React, { useState } from 'react';

const AuthContext=React.createContext({
    token:'',
    isLoggenIn:false,
    login:(token)=>{},
    logout:()=>{},
});

export const AuthContextProvider=(props)=>{
    const [token,settoken]=useState(localStorage.getItem('id'));
    const userisloggedIn=!!token
    
    const loginhandler=(token)=>{
        if(token){
        settoken(token);
        }
    }
    const logouthandler=(token)=>{
        settoken(null);
        localStorage.removeItem('id');
    }
    const contextValue={
        token:token,
        isLoggenIn: userisloggedIn,
        login: loginhandler,
        logout: logouthandler
    }
    return (
        <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
    )
}
export default AuthContext;
