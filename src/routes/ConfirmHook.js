import { useRef } from "react";
import { useConfirm } from "../components/useConfirm";
import { usePreventLeave } from "../components/usePreventLeave";
import { useBeforeLeave } from "../components/useBeforeLeave";
import { useFadeIn } from "../components/useFadeIn";
import { useNetwork } from "../components/useNetwork";
import { useScroll } from "../components/useScroll";
import { useFullscree } from "../components/useFullscreen";
import { useNotification } from "../components/useNotification";
import { useAxios } from "../components/useAxios";
import { useInput } from "../components/useInput";
import { useTabs } from "../components/useTabs";

const ConfirmHook=()=>{

    const content = [
        {
        tab: "section1",
        content: "I'm content 1"
        },
        {
        tab: "section2",
        content: "I'm content 2"
        }
    ];

    const handleNetworkChange=(online)=>{
        console.log( online ? "We just online": "We are offline ");
    }
    const onLine = useNetwork(handleNetworkChange);
    const fadeH1 = useFadeIn(1,2);
    const fadeP = useFadeIn(5,10);
    const {enablePrevent, disablePrevent} = usePreventLeave();
    const deleteWord=()=>{
        console.log("del");
    }

    const abort=()=>{
        console.log("abort");
    }
    const confirmDelete = useConfirm("are you sure??",deleteWord, abort);

    const begForLife = ()=>{
        console.log("Pls dont leave");
    }

    useBeforeLeave(begForLife);

    const {y} = useScroll();

    const onFullS =(isFull)=>{
        console.log(isFull? "We are Full" : "We are small");
    }
    const { element, triggerFull, exitFull } = useFullscree(onFullS);

    const triggerNoti = useNotification("I see you ", {body : "you see me?"});

    const {loding, data, error, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"});

    console.log(`Loding : ${loding}, Data : ${JSON.stringify(data)}, Error : ${error}`)
    const maxLen=(val)=>{
        return val.length < 10;
    }
    const name = useInput("MR. ", maxLen);
    const { currentItem, changeItem } = useTabs(0, content);

    const potato = useRef();
    setTimeout(() => potato.current.focus(), 5000);
    return (
        
        <div style={{height: "100vh"}}>
            <h1 {...fadeH1}>Hi</h1>
            <input placeholder="la" {...name}/>
            <input type="text" ref={potato} placeholder="la" />
            <h1 style={{position:"fixed", color: y > 20 ? "red" : "blue" }}>Hi 2222</h1>
            <div>{onLine? "Online" : "Offline"}</div>
            <button onClick={confirmDelete}>Delete the Word</button>
            <button onClick={enablePrevent}>Protect</button>
            <button onClick={disablePrevent}>Unprotect</button>
            <p {...fadeP}>hahahaha good job</p>
            <div ref={element}>
                <img src='https://www.hdwallpapers.in/thumbs/2020/spiderman_endgame_4k_hd_avengers_endgame-t2.jpg' alt=''/>
                <button onClick={triggerFull}>Image FullScreen</button>
                <button onClick={exitFull}>exit FullScreen</button>
            </div>
            <button onClick={triggerNoti}>Hello Noti</button>
            <button onClick={refetch}>Refetch</button>
            <div>
                {data&& data.status}
                <h1>{loding && "Loding"}</h1>
            </div>

            <div>
                {content.map((section, index) => {
                    return (
                        <button key={index} onClick={() => changeItem(index)}>
                            {section.tab}
                        </button>
                    );
                })}
              <div>{currentItem.content}</div>
            </div>
        </div>
    );
}

export default ConfirmHook;