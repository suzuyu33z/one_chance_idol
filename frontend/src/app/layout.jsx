import "./globals.css";
import React from "react";
import Footer from "src/app/components/footer";
// フッターコンポーネントをインポート

export const metadata = {
  title: "わん-Chance-アイドル",
  description: "犬との素敵な出会いを提供するアプリ",
};

export default function RootLayout({ children }) {
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
        <Footer /> {/* フッターを追加 */}
      </body>
    </html>
  );
}
