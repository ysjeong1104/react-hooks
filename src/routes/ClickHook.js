
import { useEffect, useRef } from "react";

const useClick=(onClick)=>{
    const element  = useRef();

    useEffect(()=>{
        
        if(typeof onClick !== "function"){
            return;
        }
        if(element.current){
            element.current.addEventListener("click", onClick);
           
        }
        return ()=> {
            if(element.current)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            element.current.removeEventlistener("click", onClick);
        };
    })
    return element;
}
const ClickHook=()=>{
    const sayHello =()=>{
        console.log("say hello")
    }
    const title = useClick(sayHello);
    return (
        <div>
            <h1 ref={title}>Hi</h1>            
        </div>
    );
}

export default ClickHook;