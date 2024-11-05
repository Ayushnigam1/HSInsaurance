import type { Metadata } from "next";
import "../../globals.css";
import { NextStudioLayout } from "next-sanity/studio";

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
        <NextStudioLayout>{children}</NextStudioLayout>
      </body>
    </html>
  );
}