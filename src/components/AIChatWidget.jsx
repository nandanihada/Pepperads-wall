import React, { useState } from "react";
import { X, Send } from "lucide-react";

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hey there! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are PepperAds Assistant. Be friendly and helpful." },
            ...newMessages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text
            }))
          ]
        })
      });

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content || "Sorry, I didn't get that.";
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "bot", text: "⚠️ Error talking to AI." }]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-red-500 text-white text-2xl border-2 border-white shadow-lg flex items-center justify-center"
        >
          💬
        </button>
      ) : (
        <div className="w-80 bg-[#111] text-white border border-red-500 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-[#1a1a1a] border-b border-[#222] font-semibold text-sm">
            <span>PepperAds Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-400">
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-2 px-4 py-3 h-80 overflow-y-auto bg-[#111] text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl max-w-[75%] break-words ${
                  msg.sender === "user"
                    ? "bg-red-500 text-white self-end rounded-br-none"
                    : "bg-[#333] text-white self-start rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex items-center px-3 py-2 border-t border-[#222] bg-[#111]">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-[#1f1f1f] text-white rounded-md text-sm border-none outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-2 rounded-md bg-red-500 text-white hover:bg-red-600"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
