import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/Navbar";
import { Container } from "@mui/joy";



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
        <NavBar/>
        <Container sx={{ width: { md: '100%' }, paddingTop: {md: '64px' }, height:'100vh' }}>{children}</Container>
      </body>
    </html>
  );
}
