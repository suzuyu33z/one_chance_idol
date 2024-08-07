import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      {/* ヘッダー */}
      <header className="w-full bg-green-100 py-4 text-center text-green-700 font-bold text-lg">
        わん-Chance-アイドル
      </header>

      {/* メインコンテンツ */}
      <main className="flex-1 w-full flex flex-col justify-start items-center px-4 pt-4 pb-8 space-y-8">
        {/* 上部の画像 */}
        <div className="w-full flex justify-center mb-4">
          <img
            src="/images/dog_image.jpeg"
            alt="Dog"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        {/* 2カラムのボタン */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <Link
            href="/home/walksearch"
            className="block bg-green-200 text-green-700 py-10 rounded-md font-semibold text-center hover:bg-green-300 transition-colors"
          >
            わんちゃんを探す
          </Link>
          <Link
            href="/home/myschedule"
            className="block bg-green-200 text-green-700 py-10 rounded-md font-semibold text-center hover:bg-green-300 transition-colors"
          >
            予定を確認する
          </Link>
          <Link
            href="/home/history"
            className="block bg-green-200 text-green-700 py-10 rounded-md font-semibold text-center hover:bg-green-300 transition-colors"
          >
            履歴を見る
          </Link>
          <Link
            href="/home/editio"
            className="block bg-green-200 text-green-700 py-10 rounded-md font-semibold text-center hover:bg-green-300 transition-colors"
          >
            プロフィール
          </Link>
        </div>
      </main>

      {/* フッター */}
      <footer className="w-full bg-green-100 py-4 text-center text-green-700">
        <Link href="/logout" className="underline text-sm">
          ログアウト
        </Link>
      </footer>
    </div>
  );
}
