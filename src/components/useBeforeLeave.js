import { useEffect } from "react";
const useBeforeLeave=(onBefore)=>{
    
    if(typeof onBefore !== "function")
        return;

    
    const handle=(event)=>{
        const {clientY} = event;
        if (clientY <= 0){
            onBefore();
        }        
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        document.addEventListener("mouseleave",handle);
        
        return ()=>{
            document.removeEventListener("mouseleave",handle);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

}

export {useBeforeLeave};