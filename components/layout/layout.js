import {Fragment} from "react";
import Navigation from "./navigation";
import {Container} from "@mui/material";

function Layout(props){
    return (
        <Fragment>
            <Navigation/>
            <Container style={{paddingTop: "100px"}}>
                {props.children}
            </Container>
        </Fragment>
    )
}

export default Layout;