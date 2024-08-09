"use client";

import "./globals.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  const [shouldHideFooter, setShouldHideFooter] = useState(false);

  useEffect(() => {
    // クライアントサイドでのみ実行
    const path = window.location.pathname;
    const hideFooterPaths = [
      "/login",
      "/new",
      "/",
      "/new/visitor",
      "/new/owner",
    ];
    setShouldHideFooter(hideFooterPaths.includes(path));
  }, []);

  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
