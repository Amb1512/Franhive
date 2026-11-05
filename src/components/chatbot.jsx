import { useEffect, useRef, useState } from "react";
import "./chatbot.css";

export default function Chatbot({ isOpen, onOpen, onClose }) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);
  const typingTimerRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);
  const [leadCapture, setLeadCapture] = useState(null);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hi! 👋 I'm the FranHive Assistant. How can I help you today?",
      time: "Just now",
    },
  ]);

  const suggestions = [
    "Customised CRM",
    "Software Engineering",
    "Website Development",
    "Digital Growth",
    "Request a demo",
  ];

  useEffect(() => {
    messagesEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => () => clearTimeout(typingTimerRef.current), []);

  const sendMessage = (text = message) => {
    const cleanMessage = text.trim();

    if (!cleanMessage || isTyping) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: cleanMessage,
        time: "Just now",
      },
    ]);

    setMessage("");
    setIsTyping(true);

    clearTimeout(typingTimerRef.current);
    typingTimerRef.current = setTimeout(async () => {
      let botReply;

      if (leadCapture && leadCapture.step === "name") {
        const nextLead = { ...leadCapture, name: cleanMessage, step: "email" };
        setLeadCapture(nextLead);
        botReply = "Thanks! What email address should our team use to contact you?";
      } else if (leadCapture && leadCapture.step === "email") {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanMessage)) {
          botReply = "Please enter a valid email address, such as name@company.com.";
        } else {
          const nextLead = { ...leadCapture, email: cleanMessage, step: "requirement" };
          setLeadCapture(nextLead);
          botReply = "Great. What CRM, software, website or automation requirement would you like us to discuss?";
        }
      } else if (leadCapture && leadCapture.step === "requirement") {
        const completedLead = { ...leadCapture, requirement: cleanMessage };
        let service = "other";
        const query = cleanMessage.toLowerCase();
        if (query.includes("crm") || query.includes("lead") || query.includes("sales")) service = "crm";
        else if (query.includes("website") || query.includes("web")) service = "website";
        else if (query.includes("automate") || query.includes("workflow")) service = "automation";
        else if (query.includes("seo") || query.includes("marketing") || query.includes("digital")) service = "digital-growth";
        else if (query.includes("software") || query.includes("app")) service = "software";

        try {
          const enquiry = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              name: completedLead.name,
              email: completedLead.email,
              phone: "",
              company: "",
              service,
              message: cleanMessage,
              _subject: "New enquiry collected by FranHive AI",
              _replyto: completedLead.email,
            }),
          });
          const result = await enquiry.json();
          botReply = result.success
            ? `Thanks, ${completedLead.name}. Your enquiry has been sent to the FranHive team.`
            : "I captured your requirement, but the enquiry service is unavailable right now. Please try the Contact Us page.";
        } catch {
          botReply = "I could not submit the enquiry right now. Please use the Contact Us page or email info@franhive.com.";
        }
        setLeadCapture(null);
      } else {
        const wantsDemo = /demo|contact|talk to|speak|quotation|quote|enquir/i.test(cleanMessage);
        if (wantsDemo) {
          setLeadCapture({ step: "name", name: "", email: "", requirement: "" });
          botReply = "I'd be happy to arrange that. What name should I use?";
        } else {
          try {
            const history = [...messages, {
              type: "user",
              text: cleanMessage,
            }].slice(-10).map((item) => ({
              role: item.type === "bot" ? "assistant" : "user",
              content: item.text,
            }));

            const response = await fetch("/api/chat", {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify({ messages: history }),
            });
            const result = await response.json().catch(() => ({}));
            if (response.ok && result.success && result.reply) {
              botReply = result.reply;
            } else {
              botReply = result.message || "The AI service is unavailable. Configure a Groq API key in the server environment and redeploy.";
            }
          } catch {
            botReply = "The AI service could not be reached. On local development, run the app with Vercel functions, and make sure GROQ_API_KEY is configured.";
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: botReply,
          time: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 650);
  };

  const resetConversation = () => {
    clearTimeout(typingTimerRef.current);
    setIsTyping(false);
    setMessage("");
    setLeadCapture(null);
    setMessages([
      {
        type: "bot",
        text: "Hi! 👋 I'm the FranHive Assistant. How can I help you today?",
        time: "Just now",
      },
    ]);
  };

  const getFollowUpReply = (text, replyIndex) => {
    const replies = [
      `Would you like me to narrow this down further: what business process or goal are you trying to improve?`,
      `A little more detail would help—please share your company size, timeline or the main problem you want to solve.`,
      `You can also send an enquiry through the Contact Us page so the FranHive team can provide a tailored recommendation.`,
    ];

    return replies[replyIndex % replies.length];
  };

  const getBotReply = (text, replyIndex) => {
    const query = text.toLowerCase();

    if (
      query.includes("hello") ||
      query.includes("hi") ||
      query.includes("hey") ||
      query.includes("good morning") ||
      query.includes("good afternoon")
    ) {
      return "Hello! What would you like to explore—CRM, software, websites, digital growth or automation?";
    }

    if (
      query.includes("thank") ||
      query.includes("thanks")
    ) {
      return "You're welcome! If you have another requirement, share it here or use our Contact Us page.";
    }

    if (
      query.includes("price") ||
      query.includes("cost") ||
      query.includes("budget") ||
      query.includes("quotation") ||
      query.includes("quote")
    ) {
      return "Pricing depends on features, integrations, design scope and delivery timeline. Share a few requirements and the team can prepare an appropriate estimate.";
    }

    if (
      query.includes("time") ||
      query.includes("timeline") ||
      query.includes("how long") ||
      query.includes("delivery")
    ) {
      return "The delivery timeline depends on project complexity and integrations. A small website or workflow can be quick, while a customised CRM or business platform may be delivered in phases.";
    }

    if (
      query.includes("crm") ||
      query.includes("customer") ||
      query.includes("sales")
    ) {
      const replies = [
        "FranHive builds customised CRM systems around your sales process, customers and business workflows. Would you like to discuss your CRM requirements?",
        "We can design CRM features for lead tracking, sales pipelines, customer records, reporting, follow-ups and team collaboration.",
      ];
      return replies[replyIndex % replies.length];
    }

    if (
      query.includes("software") ||
      query.includes("engineering") ||
      query.includes("application")
    ) {
      const replies = [
        "FranHive provides software engineering for scalable web applications and business systems designed around specific operational requirements.",
        "We build and modernise web applications, dashboards and internal business systems using maintainable architectures tailored to your workflows.",
      ];
      return replies[replyIndex % replies.length];
    }

    if (
      query.includes("website") ||
      query.includes("web")
    ) {
      const replies = [
        "We build responsive, high-performance websites designed around your business goals. We can also help with hosting, SEO and ongoing digital growth.",
        "Our website solutions can include modern responsive design, mobile optimisation, content management, forms and analytics.",
      ];
      return replies[replyIndex % replies.length];
    }

    if (
      query.includes("seo") ||
      query.includes("marketing") ||
      query.includes("digital") ||
      query.includes("social media") ||
      query.includes("ppc")
    ) {
      const replies = [
        "FranHive provides digital growth solutions including website development, SEO, PPC and social media marketing to help businesses reach the right audience.",
        "We can help improve search visibility, campaign performance, audience targeting and website conversion for your business.",
      ];
      return replies[replyIndex % replies.length];
    }

    if (
      query.includes("automation") ||
      query.includes("automate")
    ) {
      const replies = [
        "We can automate repetitive business processes, connect workflows and reduce manual work so your team can focus on higher-value activities.",
        "Common automation opportunities include approvals, reminders, reports, lead routing, notifications and integrations between business tools.",
      ];
      return replies[replyIndex % replies.length];
    }

    if (
      query.includes("demo") ||
      query.includes("contact") ||
      query.includes("talk")
    ) {
      return "Absolutely! You can request a demo and our team can understand your requirements and recommend the right FranHive solution.";
    }

    if (
      query.includes("who are you") ||
      query.includes("what is franhive") ||
      query.includes("what do you do") ||
      query.includes("what does franhive do") ||
      query.includes("what does your company do") ||
      query.includes("your services")
    ) {
      return "FranHive provides customised CRM solutions, software engineering, website development, digital growth and business automation for growing organisations.";
    }

    return "I'd be happy to help with FranHive's CRM, software engineering, websites, digital growth or business automation solutions. What are you looking for?";
  };

  return (
    <>
      {!isOpen && (
        <button
          type="button"
          className="chatbot-launcher"
          onClick={onOpen}
          aria-label="Open FranHive AI chatbot"
        >
          <span className="chatbot-launcher-label">Ask AI</span>
        </button>
      )}

      {isOpen && (
        <div className="chatbot-overlay">

          <div className="chatbot-window">

        {/* HEADER */}
        <div className="chatbot-header">

          <div className="chatbot-brand">

            <div className="chatbot-logo">
              <span className="chatbot-logo-spark"></span>
              FH
            </div>

            <div>
              <h3>FranHive AI</h3>

              <span>
                <i></i>
                Business Assistant
              </span>
            </div>

          </div>

          <div className="chatbot-header-actions">
            <button
              className="chatbot-reset"
              onClick={resetConversation}
              aria-label="Start a new conversation"
              title="New conversation"
            >
              ↻
            </button>
            <button
              className="chatbot-close"
              onClick={onClose}
              aria-label="Close chatbot"
            >
              ×
            </button>
          </div>

        </div>


        {/* MESSAGES */}
        <div className="chatbot-messages">

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message-row ${msg.type}`}
            >
              {msg.type === "bot" && (
                <div className="chatbot-avatar" aria-hidden="true">FH</div>
              )}
              <div className="chat-message-content">
                <div className={`chat-message ${msg.type}`}>
                  {msg.text}
                </div>
                <span className="chat-message-time">{msg.time}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="chat-message-row bot">
              <div className="chatbot-avatar" aria-hidden="true">FH</div>
              <div className="chat-typing" aria-label="FranHive AI is typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          {/* QUICK OPTIONS */}
          {messages.length === 1 && (
            <div className="chatbot-suggestions">
              <span className="chatbot-suggestions-label">What can I help with?</span>
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
          <div ref={messagesEndRef} />

        </div>


        {/* INPUT */}
        <div className="chatbot-input-area">
          <div className="chatbot-composer">
          <textarea
            placeholder="Ask about FranHive..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            rows={1}
            disabled={isTyping}
          />

          <button
            className="chatbot-send"
            onClick={() => sendMessage()}
            aria-label="Send message"
            disabled={!message.trim() || isTyping}
          >
            →
          </button>
          </div>
          <span className="chatbot-powered">Powered by FranHive AI</span>

        </div>

          </div>

        </div>
      )}
    </>
  );
}