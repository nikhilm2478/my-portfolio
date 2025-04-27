import React, { useState } from "react";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<
    { from: "user" | "bot"; text: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user" as const, text: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { prompt: userMsg.text });
      const botMsg = { from: "bot" as const, text: res.data.reply };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Error: Unable to fetch response." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="assistant"
      className="py-20 px-4 sm:px-6 lg:px-20 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-blue-400 text-4xl font-semibold tracking-widest drop-shadow-[0_0_10px_rgba(0,191,255,0.6)]">
          AI Assistant
        </h2>

        <div className="h-64 overflow-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-inner">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`${
                msg.from === "user" ? "text-right" : "text-left"
              } mb-2`}
            >
              <span
                className={`inline-block px-3 py-1 rounded ${
                  msg.from === "user"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
          {loading && (
            <div className="text-center text-sm text-gray-500">Thinking...</div>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask me anything…"
            className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-blue-400 text-white p-3 rounded-r-lg hover:bg-blue-500 transition disabled:opacity-50"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </section>
  );
}
