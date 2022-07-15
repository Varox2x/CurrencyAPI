import {useRouter} from "next/router";
import {useState} from "react";
import {useEffect} from "react";
import setCurrentName_Pice from "../../API_Functions/API_Functions";

function CurrencyDetails() {
    const router = useRouter();
    const [value, setValue] = useState({currencyName: "loading...", currencyPrice: "loading..."});
    const [eventId, setEventId] = useState(router.query.currencyCode)


    // useEffect(() => {
    //     const [eventId, setEventId] = useState(router.query.currencyCode)
    //
    //     if(eventId !== undefined){
    //         setCurrentName_Pice(setValue, eventId);
    //     }
    // },[])


    return (
        <>
            <h1></h1>
            <h1>{value.currencyName}</h1>
            <p>{value.currencyPrice}</p>
        </>

    )
}

export default CurrencyDetails;