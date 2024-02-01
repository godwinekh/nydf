import React from "react";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nixerlex Youth Development Foundation",
  description:
    "Empowering young people for a prosperous world through education and other social initiatives",
  applicationName: "Nixerlex Foundation",
  referrer: "origin-when-cross-origin",
  keywords: [
    "NYDF",
    "Nixerlex Youth Development Foundation",
    "Youth empowerment",
    "making real change",
    "charity",
    "education",
    "ngo",
    "successful young individuals",
    "nixerlex foundation",
    "bright futures",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          {children}
          <Analytics />
        </ReduxProvider>
      </body>
    </html>
  );
}
