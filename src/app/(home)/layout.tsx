import type { Metadata } from "next";
import "../globals.css";
import NavBar from "@/components/Navbar";
import { CssVarsProvider } from "@mui/joy";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import appTheme from "@/theme/theme";
import Footer from "@/components/Footer";
import ConvProvider from "@/context/ConvContext/ConvProvider";
import ContactModal from "@/components/ContactModal";
import { defineQuery } from "next-sanity";
import { LandingData } from "@/interface/LandingPage";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Dhanwantri",
  description: "A Insurance Consultancy",
};

const getData = async () => {
  const LANDING_QUERY = defineQuery(
    `*[_type=="SiteSettingPage"]{ phone, email, links }[0]`
  );
  const landingData: Partial<LandingData> = await client.fetch(
    LANDING_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  return landingData;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { phone, email, links } = await getData();
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssVarsProvider theme={appTheme}>
            <ConvProvider>
              <NavBar />
              {children}
              <Footer phone={phone} email={email} links={links}  />
              <ContactModal/>
            </ConvProvider>
          </CssVarsProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
