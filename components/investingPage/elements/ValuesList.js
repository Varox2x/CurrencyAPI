import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import {useEffect, useState} from "react";

export default function FolderList() {

    const [price, setPrice] = useState({usd: "loading...", chf: "loading..."});
    const [currency, setCurrency] = useState(["usd", "chf"])

    function getCoursesOfCurrency(currencyArray){
        currencyArray.forEach((el) => {
            fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${el}/`)
                .then(response => response.json())
                .then(data => {
                    setPrice({...price,
                    [el]: data.rates[0].mid})
                    console.log(data.rates[0].mid);
                })
                .catch(error => {
                    console.log(error);
                });
        })
    }

    useEffect(()=> {
        getCoursesOfCurrency(currency);
    },[])


    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemText primary="Złoto" secondary="" />
            </ListItem>
            <ListItem>
                <ListItemText primary="CHF" secondary={`${price.chf}`} />
            </ListItem>
            <ListItem>
                <ListItemText primary="USD" secondary={`${price.usd}`} />
            </ListItem>
        </List>
    );
}
