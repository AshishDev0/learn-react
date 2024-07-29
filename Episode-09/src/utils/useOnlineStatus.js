import {useState, useEffect} from "react";

const useOnlineStatus = () => {
    const [status, setStatus] = useState(true);

    // console.log('useOnlineStatus custom hook 1')

    useEffect(() => {
        window.addEventListener("offline", () => {
            setStatus(false);
        })
        window.addEventListener("online", () => {
            setStatus(true);
        })

        // console.log('useOnlineStatus custom hook useEffect')
    }, [])

    // console.log('useOnlineStatus custom hook 2')

    return status;
}

export default useOnlineStatus;