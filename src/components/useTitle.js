import { useState,useEffect} from "react";
const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htlmTitle = document.querySelector("title");
        htlmTitle.innerText = title;
    };
    useEffect(updateTitle, [title]);

    return setTitle;
}

export {useTitle}