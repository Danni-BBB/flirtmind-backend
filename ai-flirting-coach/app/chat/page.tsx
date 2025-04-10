'use client';

import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("pickup");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse("AI đang suy nghĩ...");

    setTimeout(() => {
      switch (selectedFeature) {
        case "pickup":
          setResponse("Đây là câu thả thính dành cho bạn: 'Bạn là một thách thức mà tôi rất muốn chinh phục!'");
          break;
        case "analyzer":
          setResponse("Phân tích cuộc trò chuyện: Bạn nên tránh sử dụng quá nhiều từ ngữ chung chung. Hãy cụ thể hơn để tạo sự kết nối.");
          break;
        case "profile":
          setResponse("Gợi ý: Hãy thay đổi mô tả trong bio của bạn để thể hiện rõ sở thích và đam mê cá nhân.");
          break;
        case "vibe":
          setResponse("Phân tích vibe: Bạn cần duy trì một thái độ tự tin và thoải mái hơn khi trò chuyện.");
          break;
        default:
          setResponse("Hãy chọn tính năng để thử!");
          break;
      }
    }, 1000);
  };

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <h1 className="text-5xl font-bold text-center mb-8">Chat với AI - FlirtMind</h1>
      
      {/* Chọn tính năng */}
      <div className="mb-6 text-center">
        <button
          onClick={() => setSelectedFeature("pickup")}
          className={`mx-2 p-4 rounded-lg ${selectedFeature === "pickup" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Pickup Line Lab
        </button>
        <button
          onClick={() => setSelectedFeature("analyzer")}
          className={`mx-2 p-4 rounded-lg ${selectedFeature === "analyzer" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Chat Analyzer
        </button>
        <button
          onClick={() => setSelectedFeature("profile")}
          className={`mx-2 p-4 rounded-lg ${selectedFeature === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Profile Mastery
        </button>
        <button
          onClick={() => setSelectedFeature("vibe")}
          className={`mx-2 p-4 rounded-lg ${selectedFeature === "vibe" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Vibe & Psychology
        </button>
      </div>

      {/* Tình huống chat */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <p className="text-lg text-gray-700">{response}</p>
      </div>

      {/* Form gửi tin nhắn */}
      <form onSubmit={handleSubmit} className="mt-6">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="border p-3 rounded-lg w-full"
          placeholder="Nhập tin nhắn của bạn..."
        />
        <button
          type="submit"
          className="mt-4 bg-pink-500 text-white px-6 py-3 rounded-lg"
        >
          Gửi
        </button>
      </form>
    </div>
  );
}
