"use client";

import "./globals.css";
import React, { useEffect, useState } from "react";
import Footer from "src/app/components/footer";

export default function RootLayout({ children }) {
  const [shouldHideFooter, setShouldHideFooter] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    // フッターを表示しないパスを追加
    const hideFooterPaths = [
      "/login",
      "/new",
      "/",
      "/new/visitor",
      "/new/owner",
    ]; // "/" を追加
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
        {!shouldHideFooter && <Footer />} {/* フッターを条件付きで表示 */}
      </body>
    </html>
  );
}
