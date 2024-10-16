"use client"
import { extendTheme } from "@mui/joy";

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            }
        }
    },
    components: {
        JoyButton: {
            styleOverrides: {
                root: ({ theme }) => ({
                    borderRadius: theme.radius.sm,
                    transition: '250ms ease-in-out all',
                    '&:hover': {
                      scale: 1.05,  
                    }
                })
            }
        },
    }
})

export default theme