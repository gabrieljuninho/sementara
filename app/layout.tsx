import type { Metadata } from "next";

import { cn } from "@/common/libs/cn";

import { fontHeading, fontSans } from "@/common/styles/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-sans", fontHeading.variable, fontSans.variable)}
      >
        {children}
      </body>
    </html>
  );
}
