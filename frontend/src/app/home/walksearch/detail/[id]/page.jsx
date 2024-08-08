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
  const [messages, setMessages] = useState([]); // メッセージを格納するための状態を追加
  const [newMessage, setNewMessage] = useState(""); // 新しいメッセージの状態を追加

  useEffect(() => {
    if (id) {
      // Flask APIから特定のwalk_idのデータを取得
      fetch(`${process.env.API_ENDPOINT}/api/walks/${id}`)
        .then((response) => response.json())
        .then((data) => setWalkDetail(data))
        .catch((error) => console.error("Error fetching walk detail:", error));

      // Flask APIから特定のwalk_idのメッセージを取得
      fetch(`${process.env.API_ENDPOINT}/api/walks/${id}/messages`)
        .then((response) => response.json())
        .then((data) => setMessages(data))
        .catch((error) => console.error("Error fetching messages:", error));
    }
  }, [id]);

  // コメント送信ハンドラー
  const handleSendMessage = () => {
    // コメントをサーバーに送信するロジックを追加します
    if (newMessage.trim()) {
      const messageData = {
        walk_id: id,
        message: newMessage,
        sender_user_id: 1, // 仮のユーザーID。実際のログインユーザーのIDを使用してください。
      };

      fetch(`${process.env.API_ENDPOINT}/api/walks/${id}/messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages([...messages, data]); // 新しいメッセージを追加
          setNewMessage(""); // 入力フィールドをクリア
        })
        .catch((error) => console.error("Error sending message:", error));
    }
  };

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
                src={dog.image} // ここでCloudinaryのURLを直接使用
                alt={dog.name}
                className="w-48 h-48 object-cover"
              />
              <p>{dog.description}</p>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold">コメント</h2>
          <div className="bg-black text-white p-4 rounded-md mb-4">
            {messages.length > 0 ? (
              messages.map((message, index) => (
                <div key={index} className="mb-2">
                  <p className="text-sm font-bold">{message.sender_name}</p>
                  <p>{message.message}</p>
                  <p className="text-sm text-gray-500">{message.timestamp}</p>
                </div>
              ))
            ) : (
              <p>コメントがありません。</p>
            )}
          </div>
        </div>
        <textarea
          className="w-full p-2 rounded-md border border-gray-300 mb-2" // 下部に少し間隔をあけるために margin-bottom を追加
          rows="4"
          placeholder="ここにコメントを入力..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} // 入力内容をnewMessageに設定
        ></textarea>
        <div className="flex justify-center mb-4">
          {" "}
          {/* 中央寄せのためのflexboxコンテナ */}
          <button
            className="bg-green-500 text-white py-2 px-4 rounded" // テキストエリアに密接させるために margin を除去
            onClick={handleSendMessage} // クリックでコメント送信ハンドラーを呼び出す
          >
            コメントを送信
          </button>
        </div>
        <div className="flex justify-center mt-4">
          {" "}
          {/* ボタンの間に余白を設定 */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            申請する
          </button>
        </div>
      </main>
    </div>
  );
}
