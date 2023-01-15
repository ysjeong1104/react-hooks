import defaultAxios from "axios";
import { useEffect, useState } from "react";

const useAxios=(opts, axiosInstance = defaultAxios)=>{
    const [trigger, setTrigger] = useState(0);
    const [state, setState ] = useState({
        loding : true,
        error : null,
        data: null
    });
    if(!opts.url){
        return;
    }    

    const refetch=()=>{
        setState({
            ...state,
            loding : true
        });
        setTrigger(Date.now());
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        axiosInstance(opts).then((data)=>{
           setState({
                ...state,
                loding : false,
                data : data 
            });

        }).catch(error=>{
            setState({
                ...state,
                loding : false,
                error : error
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[trigger])
    return {...state,refetch};
}

export {useAxios};  