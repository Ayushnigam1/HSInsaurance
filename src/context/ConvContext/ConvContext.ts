import { createContext } from "react";

interface ConvContextProps {
    onClick: () => void,
    open: boolean,
    onClose: () => void
}

const ConvContext = createContext<ConvContextProps | null>(null)

export default ConvContext