import * as React from 'react';
import List from '@mui/material/List';
import { useState} from "react";
import SingleCurrent from './singleCurrent';


export default function FolderList() {

    const [currency, setCurrency] = useState(["usd", "chf", "eur"])

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {currency.map((el, index) => {
                return (
                    <SingleCurrent key={index} currencyCode={el}/>
                )
            })}
        </List>
    );
}