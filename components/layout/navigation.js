import {AppBar, Toolbar, Stack} from "@mui/material";
import Link from 'next/link'

function Navigation() {

    return (
        <AppBar>
            <Toolbar>
                <Stack direction="row" spacing={5}>
                    <Link href="/investing">
                        <a>Investing</a>
                    </Link>
                    <Link href="/">
                        <a>Home Page</a>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;