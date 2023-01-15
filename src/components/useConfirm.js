/* eslint-disable no-restricted-globals */

const useConfirm=(message="", onConfirm, onCencel)=>{

    if(!onConfirm || typeof onConfirm !== "function" ){
        return;
    }
    if(onCencel && typeof onCencel !== "function" ){
        return;
    }

    const confirmAction=()=>{
        if(confirm(message)){
            onConfirm();
        }
        else{
            onCencel();
        }
    }

    return confirmAction;
}

export { useConfirm }