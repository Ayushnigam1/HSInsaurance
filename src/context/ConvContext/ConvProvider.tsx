"use client"
import { PropsWithChildren, useState } from "react";
import ConvContext from "./ConvContext"

function ConvProvider(props: PropsWithChildren) {
    const [open, setOpen] = useState(false)
    return <ConvContext.Provider value={{ open, onClick: () => setOpen(o => !o), onClose: () => setOpen(false) }}>
        {props.children}
    </ConvContext.Provider>
}

export default ConvProvider;