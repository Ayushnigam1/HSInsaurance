"use client"
import { extendTheme } from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                }
            }
        }
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({theme}) => ({
                    borderRadius: theme.radius.sm,
                    transition: '250ms ease-in-out all'
                })    
            }
        },
    }
})

export default theme