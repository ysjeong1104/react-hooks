import { useRef } from "react";

const useFullscree=(callback)=>{

    const element = useRef();

    const runCallback=(isFull)=>{
        if(callback && typeof callback ==="function")
            callback(isFull)
    }
    const triggerFull=()=>{
        if(element.current){

            if(element.current.requestFullscreen){ //chrome                
                element.current.requestFullscreen();
            }else if(element.current.mozRequestFullscreen){ //firefox                
                element.current.mozRequestFullscreen();
            }else if(element.current.webkitRequestFullscreen){ //opera
                element.current.webkitRequestFullscreen();
            }else if(element.current.msRequsetFullscreen){ //ms
                element.current.msRequsetFullscreen();
            }            
        }
        runCallback(true);
    }

    const exitFull=()=>{
        if(document.exitFullscreen){
            document.exitFullscreen();
        }else if(document.mozCancelFullscreen){
            document.mozCancelFullscreen();
        }else if(document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }else if(document.msExitFullscreen){
            document.msExitFullscreen();
        }
        
        runCallback(false);
    }
    return { element, triggerFull,exitFull };
}

export {useFullscree};