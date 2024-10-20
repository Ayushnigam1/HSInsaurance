"use client"

import { Sheet } from "@mui/joy"
import { PropsWithChildren } from "react"

function AppBar(props: PropsWithChildren) {
    return (
        <Sheet
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: (theme) => theme.zIndex.popup,
                height: "64px",
                background: (theme) => theme.palette.background.body,
                boxShadow: (theme) => theme.shadow.md
            }}
        >
            {props.children}
        </Sheet>
    )
}

export default AppBar;