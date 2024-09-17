import React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/lib/provider";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nixerlex Youth Development Foundation",
  description:
    "Empowering young people for a prosperous world through education and other social initiatives",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T63JBKMM45"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T63JBKMM45');
          `}
        </Script>

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            // Helper function to delay opening a URL until a gtag event is sent.
            // Call it in response to an action that should navigate to a URL.
            function gtagSendEvent(url) {
              var callback = function () {
                if (typeof url === "string") {
                  window.location = url;
                }
              };
              gtag("event", "conversion_event_signup", {
                event_callback: callback,
                event_timeout: 2000,
                // <event_parameters>
              });
              return false;
            }
          `}
        </Script>
      </head>
      <body className={poppins.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
