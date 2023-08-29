import { verifyJwtToken } from "@/lib/auth";
import React from "react";
import Cookies from "universal-cookie";

const fromServer= async()=>{
    const cookies = require("next/headers").cookies();
    const {value: Token} = cookies.get("Token") || {value: null};
    const verifiedToken = await verifyJwtToken(Token);
    return verifiedToken;  
} 

export function useAuth(){

    const [auth,setAuth] = React.useState(null);

    const getVerifedToken = async()=>{
        const cookies = new Cookies();
        const token = cookies.get("Token") ?? null;
        const verifiedToken = await verifyJwtToken(token);
        setAuth(verifiedToken);
    }

    React.useEffect(()=>{
        getVerifedToken();
    },[])
    
    return auth
}

useAuth.fromServer = fromServer;