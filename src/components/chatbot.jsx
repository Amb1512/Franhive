import { useState } from "react";
import "./chatbot.css";

export default function Chatbot({ isOpen, onClose }) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm the FranHive Assistant. How can I help you today?",
    },
  ]);

  const suggestions = [
    "Customised CRM",
    "Software Engineering",
    "Website Development",
    "Digital Growth",
  ];

  const sendMessage = (text = message) => {
    const cleanMessage = text.trim();

    if (!cleanMessage) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: cleanMessage,
      },
      {
        type: "bot",
        text: getBotReply(cleanMessage),
      },
    ]);

    setMessage("");
  };

  const getBotReply = (text) => {
    const query = text.toLowerCase();

    if (
      query.includes("crm") ||
      query.includes("customer") ||
      query.includes("sales")
    ) {
      return "FranHive builds customised CRM systems around your sales process, customers and business workflows. Would you like to discuss your CRM requirements?";
    }

    if (
      query.includes("software") ||
      query.includes("engineering") ||
      query.includes("application")
    ) {
      return "FranHive provides software engineering for scalable web applications and business systems designed around specific operational requirements.";
    }

    if (
      query.includes("website") ||
      query.includes("web")
    ) {
      return "We build responsive, high-performance websites designed around your business goals. We can also help with hosting, SEO and ongoing digital growth.";
    }

    if (
      query.includes("seo") ||
      query.includes("marketing") ||
      query.includes("digital") ||
      query.includes("social media") ||
      query.includes("ppc")
    ) {
      return "FranHive provides digital growth solutions including website development, SEO, PPC and social media marketing to help businesses reach the right audience.";
    }

    if (
      query.includes("automation") ||
      query.includes("automate")
    ) {
      return "We can automate repetitive business processes, connect workflows and reduce manual work so your team can focus on higher-value activities.";
    }

    if (
      query.includes("demo") ||
      query.includes("contact") ||
      query.includes("talk")
    ) {
      return "Absolutely! You can request a demo and our team can understand your requirements and recommend the right FranHive solution.";
    }

    return "I'd be happy to help with FranHive's CRM, software engineering, websites, digital growth or business automation solutions. What are you looking for?";
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-overlay">

      <div className="chatbot-window">

        {/* HEADER */}
        <div className="chatbot-header">

          <div className="chatbot-brand">

            <div className="chatbot-logo">
              FH
            </div>

            <div>
              <h3>FranHive Assistant</h3>

              <span>
                <i></i>
                Online
              </span>
            </div>

          </div>

          <button
            className="chatbot-close"
            onClick={onClose}
            aria-label="Close chatbot"
          >
            ×
          </button>

        </div>


        {/* MESSAGES */}
        <div className="chatbot-messages">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.type}`}
            >
              {msg.text}
            </div>
          ))}

          {/* QUICK OPTIONS */}
          {messages.length === 1 && (
            <div className="chatbot-suggestions">

              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                >
                  {suggestion}
                </button>
              ))}

            </div>
          )}

        </div>


        {/* INPUT */}
        <div className="chatbot-input-area">

          <input
            type="text"
            placeholder="Ask about FranHive..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            className="chatbot-send"
            onClick={() => sendMessage()}
            aria-label="Send message"
          >
            →
          </button>

        </div>

      </div>

    </div>
  );
}