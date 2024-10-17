import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { CssVarsProvider } from "@mui/joy";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import appTheme from "@/theme/theme";
import Footer from "@/components/Footer";
import ConvProvider from "@/context/ConvContext/ConvProvider";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Dhanwantri",
  description: "A Insurance Consultancy",
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
            <ConvProvider>
              <NavBar />
              {children}
              <Footer />
              <ContactModal />
            </ConvProvider>
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
