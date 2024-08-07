"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // useParamsをインポート
import Link from "next/link";

export default function WalkDetailPage() {
  const { id } = useParams(); // useParamsでidを取得

  // idが未定義の場合は何も表示しない
  if (!id) {
    return <p>Loading...</p>;
  }

  const [walkDetail, setWalkDetail] = useState(null);

  useEffect(() => {
    if (id) {
      // Flask APIから特定のwalk_idのデータを取得
      fetch(`${process.env.API_ENDPOINT}/api/walks/${id}`)
        .then((response) => response.json())
        .then((data) => setWalkDetail(data))
        .catch((error) => console.error("Error fetching walk detail:", error));
    }
  }, [id]);

  if (!walkDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="w-full bg-green-100 py-4 text-center text-green-700 font-bold text-lg">
        わん-Chance-アイドル
      </header>

      <main className="flex-1 overflow-y-auto w-full px-4 py-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">日時</h2>
          <p>
            {walkDetail.date} {walkDetail.time_start}〜{walkDetail.time_end}
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">場所</h2>
          <p>{walkDetail.location}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">散歩について</h2>
          <p>{walkDetail.description}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">オーナー情報</h2>
          <p>名前: {walkDetail.owner_name}</p>
          <p>自己紹介: {walkDetail.owner_bio}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">わんちゃん</h2>
          {walkDetail.dogs.map((dog, index) => (
            <div key={index} className="mb-2">
              <p>
                {dog.name} / {dog.breed} / {dog.age}歳 / {dog.gender}
              </p>
              <img
                src={dog.image}
                alt={dog.name}
                className="w-48 h-48 object-cover"
              />
              <p>{dog.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">コメント</h2>
          <textarea
            className="w-full p-2 rounded-md border border-gray-300"
            rows="4"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          申請する
        </button>
      </main>

      <footer className="fixed bottom-0 w-full bg-green-100 py-4 text-center text-green-700">
        <Link href="/logout" className="underline text-sm">
          ログアウト
        </Link>
      </footer>
    </div>
  );
}
