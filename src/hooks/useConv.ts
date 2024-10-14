import ConvContext from "@/context/ConvContext/ConvContext";
import { useContext } from "react";

function useConv() {
    const context = useContext(ConvContext)
    if (!context) {
        throw Error("Conv Context not found")
    }
    return context
}

export default useConv;