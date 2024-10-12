import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { Container, CssVarsProvider } from "@mui/joy";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import appTheme from "@/theme/theme";



export const metadata: Metadata = {
  title: "Sozo",
  description: "A insaurance app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={appTheme}>
            <NavBar />
            <Container>
              {children}
            </Container>
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
