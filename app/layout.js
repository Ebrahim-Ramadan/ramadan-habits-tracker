import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Header } from "@/components/globals/Header";
import React from "react";
import Loading from "./loading";

export const metadata = {
  title: "Ramadan Tracking project",
  description: "track your islamic habits in Ramadan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
      <meta name="keywords" content="fitness, gym progress, workout, gym sets tracker, fitness routines, gymrat, gymbruh, gymbro" />
 
        <meta name="description" content="track your islamic habits in Ramadans" />
        <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/png"/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <title>Ramadan Tracking project</title> 
      </head>
      <body className={GeistSans.className}>
      <React.Suspense fallback={<Loading />}>
        <Header/>
        </React.Suspense>
        {children}
      </body>
    </html>
  );
}
