import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-green-100 py-4 flex justify-around items-center">
      <Link href="/home">
        <div className="text-center">
          <span className="material-icons">home</span>
          <p className="text-xs">ホーム</p>
        </div>
      </Link>
      <Link href="/home/history">
        <div className="text-center">
          <span className="material-icons">history</span>
          <p className="text-xs">マッチ履歴</p>
        </div>
      </Link>
      <Link href="/home/walksearch">
        <div className="text-center">
          <span className="material-icons">search</span>
          <p className="text-xs">犬検索</p>
        </div>
      </Link>
      <Link href="/home/walkregi">
        <div className="text-center">
          <span className="material-icons">pets</span>
          <p className="text-xs">散歩登録</p>
        </div>
      </Link>
      <Link href="/home/edition">
        <div className="text-center">
          <span className="material-icons">person</span>
          <p className="text-xs">プロフ変更</p>
        </div>
      </Link>
    </footer>
  );
}
