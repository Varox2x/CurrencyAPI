import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from "react"
import setCurrentName_Pice from "../../../API_Functions/API_Functions";

function SingleCurrent ({currencyCode}) {
    const [value, setValue] = useState({currencyName: "loading...", currencyPrice: "loading..."})
    useEffect(()=> {
        setCurrentName_Pice(setValue, currencyCode);
    },[])
    return (
        <ListItem>
            <ListItemText primary = {value.currencyName} secondary={value.currencyPrice} />
        </ListItem>
    )
}

export default SingleCurrent;