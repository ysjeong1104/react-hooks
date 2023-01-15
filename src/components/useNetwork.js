
import { useState,useEffect } from "react";
const useNetwork=(onChange)=>{

    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () =>{
        if(typeof onChange === "function"){
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine);
        
    }
    
    useEffect(()=>{
        window.addEventListener("online",handleChange);
        window.addEventListener("offline",handleChange);

        return ()=>{
            window.removeEventListener("online",handleChange);
            window.removeEventListener("offline",handleChange);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return status;

}

export { useNetwork }