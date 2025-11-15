// // import { useState, useRef, useEffect } from "react";
// // import { Button } from "@/components/ui/button";
// // import { Card } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { MessageCircle, X, Send, Loader2 } from "lucide-react";

// // const GEMINI_API_KEY = "AIzaSyC7v6nMatj3iFh84EPI0nd5cNjB5jS1BDI";

// // interface Message {
// //   role: "user" | "assistant";
// //   content: string;
// // }

// // const GeminiChatbot = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [messages, setMessages] = useState<Message[]>([
// //     {
// //       role: "assistant",
// //       content: "Hi! I'm WebnBot's AI assistant. 👋 Ask me anything about our chatbot services, website development, pricing, or how we can help your business. I'm here to answer all your questions!",
// //     },
// //   ]);
// //   const [input, setInput] = useState("");
// //   const [isLoading, setIsLoading] = useState(false);
// //   const messagesEndRef = useRef<HTMLDivElement>(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages]);

// //   const sendMessage = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (!input.trim() || isLoading) return;

// //     const userMessage: Message = { role: "user", content: input };
// //     setMessages((prev) => [...prev, userMessage]);
// //     setInput("");
// //     setIsLoading(true);

// //     try {
// //       const response = await fetch(
// //         `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify({
// //             contents: [
// //               {
// //                 parts: [
// //                   {
// //                     text: `You are a knowledgeable AI assistant for WebnBot, a company specializing in ready-made chatbots, custom bot development, and complete website services. 

// // Key Services:
// // - Ready-made chatbots for quick deployment
// // - Custom bot development tailored to specific needs
// // - Full website development services
// // - WhatsApp integration for contact (03350458593)

// // Answer questions about services, pricing, features, and how WebnBot can help businesses. Be friendly, professional, and helpful. If asked for contact, mention WhatsApp number 03350458593.

// // User's question: ${input}`,
// //                   },
// //                 ],
// //               },
// //             ],
// //           }),
// //         }
// //       );

// //       const data = await response.json();
// //       const assistantMessage: Message = {
// //         role: "assistant",
// //         content:
// //           data.candidates?.[0]?.content?.parts?.[0]?.text ||
// //           "I apologize, I couldn't process that request. Please try again.",
// //       };
// //       setMessages((prev) => [...prev, assistantMessage]);
// //     } catch (error) {
// //       console.error("Error:", error);
// //       setMessages((prev) => [
// //         ...prev,
// //         {
// //           role: "assistant",
// //           content: "Sorry, I encountered an error. Please try again later.",
// //         },
// //       ]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Chat Button */}
// //       {!isOpen && (
// //         <Button
// //           onClick={() => setIsOpen(true)}
// //           className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
// //           size="icon"
// //         >
// //           <MessageCircle className="h-6 w-6" />
// //         </Button>
// //       )}

// //       {/* Chat Window */}
// //       {isOpen && (
// //         <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
// //           {/* Header */}
// //           <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
// //             <div className="flex items-center gap-2">
// //               <MessageCircle className="h-5 w-5" />
// //               <h3 className="font-semibold">WebnBot Assistant</h3>
// //             </div>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               onClick={() => setIsOpen(false)}
// //               className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
// //             >
// //               <X className="h-4 w-4" />
// //             </Button>
// //           </div>

// //           {/* Messages */}
// //           <div className="flex-1 overflow-y-auto p-4 space-y-4">
// //             {messages.map((message, index) => (
// //               <div
// //                 key={index}
// //                 className={`flex ${
// //                   message.role === "user" ? "justify-end" : "justify-start"
// //                 }`}
// //               >
// //                 <div
// //                   className={`max-w-[80%] rounded-lg p-3 ${
// //                     message.role === "user"
// //                       ? "bg-primary text-primary-foreground"
// //                       : "bg-muted"
// //                   }`}
// //                 >
// //                   <p className="text-sm whitespace-pre-wrap">{message.content}</p>
// //                 </div>
// //               </div>
// //             ))}
// //             {isLoading && (
// //               <div className="flex justify-start">
// //                 <div className="bg-muted rounded-lg p-3">
// //                   <Loader2 className="h-4 w-4 animate-spin" />
// //                 </div>
// //               </div>
// //             )}
// //             <div ref={messagesEndRef} />
// //           </div>

// //           {/* Input */}
// //           <form onSubmit={sendMessage} className="p-4 border-t">
// //             <div className="flex gap-2">
// //               <Input
// //                 value={input}
// //                 onChange={(e) => setInput(e.target.value)}
// //                 placeholder="Type your message..."
// //                 disabled={isLoading}
// //               />
// //               <Button type="submit" size="icon" disabled={isLoading}>
// //                 <Send className="h-4 w-4" />
// //               </Button>
// //             </div>
// //           </form>
// //         </Card>
// //       )}
// //     </>
// //   );
// // };

// // export default GeminiChatbot;


// // grok code 

// import { useState, useRef, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { MessageCircle, X, Send, Loader2 } from "lucide-react";

// interface Message {
//   role: "user" | "assistant";
//   content: string;
// }

// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// const GeminiChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       role: "assistant",
//       content: "سلام! میں WebnBot کا AI Assistant ہوں \nآپ کو چاہیے چیٹ بوٹ، ویب سائٹ، یا پرائس؟ بس پوچھیں!",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!input.trim() || isLoading || !GEMINI_API_KEY) return;

//     const userMessage: Message = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const response = await fetch(
//         `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             contents: [
//               {
//                 role: "user",
//                 parts: [
//                   {
//                     text: `You are WebnBot's AI Assistant. Services:
// - Ready-made chatbot: PKR 15,000–50,000
// - Custom bot: PKR 80,000+
// - Website + Bot: PKR 120,000+
// - WhatsApp: 03350458593

// User asked: "${input}"

// Answer in Urdu + English mix. Be friendly. End with contact if needed.`,
//                   },
//                 ],
//               },
//             ],
//             safetySettings: [
//               { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
//             ],
//           }),
//         }
//       );

//       if (!response.ok) {
//         const err = await response.text();
//         console.error("API Error:", err);
//         throw new Error("API failed");
//       }

//       const data = await response.json();
//       const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || "Sorry, try again.";

//       setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
//     } catch (error) {
//       console.error("Chatbot Error:", error);
//       setMessages((prev) => [
//         ...prev,
//         { role: "assistant", content: "معاف کیجیے، کنکشن ایشو ہے۔ دوبارہ کوشش کریں۔" },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       {!isOpen && (
//         <Button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary"
//           size="icon"
//         >
//           <MessageCircle className="h-6 w-6" />
//         </Button>
//       )}

//       {isOpen && (
//         <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
//           <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
//             <div className="flex items-center gap-2">
//               <MessageCircle className="h-5 w-5" />
//               <h3 className="font-semibold">WebnBot Assistant</h3>
//             </div>
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(false)}
//               className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
//             >
//               <X className="h-4 w-4" />
//             </Button>
//           </div>

//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
//               >
//                 <div
//                   className={`max-w-[80%] rounded-lg p-3 ${
//                     message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
//                   }`}
//                 >
//                   <p className="text-sm whitespace-pre-wrap">{message.content}</p>
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-muted rounded-lg p-3">
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           <form onSubmit={sendMessage} className="p-4 border-t">
//             <div className="flex gap-2">
//               <Input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="پیغام لکھیں..."
//                 disabled={isLoading}
//               />
//               <Button type="submit" size="icon" disabled={isLoading}>
//                 <Send className="h-4 w-4" />
//               </Button>
//             </div>
//           </form>
//         </Card>
//       )}
//     </>
//   );
// };

// export default GeminiChatbot;





import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// API Key from .env
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const GeminiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm WebnBot's AI Assistant. Ask me about chatbots, websites, pricing, or anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Check API Key
    if (!GEMINI_API_KEY) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: Add VITE_GEMINI_API_KEY in .env file." },
      ]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are WebnBot's AI Assistant. Services:
You are WebnBot's AI Assistant — a professional, friendly, and conversion-focused expert in chatbots and website development.

=== CORE SERVICES ===
1. **Ready-Made Chatbots** ($59–$119 one-time)
   - E-Commerce, Marketing, Booking, Support, Restaurant, FAQ
   - Deploy in minutes on WhatsApp, Website, Facebook, etc.
   - Features: Product catalog, lead capture, calendar sync, payments, analytics

2. **Custom Bot Development**
   - Bespoke AI solutions with advanced NLP, CRM, APIs, multilingual, enterprise security
   - Real-time analytics, automation, escalation rules

3. **Website Development** ($45–$100+)
   - Landing Page ($45), Business Site ($70), E-Commerce ($90), Enterprise (Custom)
   - Built with React, Next.js, WordPress, Shopify
   - Responsive, SEO-optimized, <3s load, Google Analytics, CMS

4. **Bot + Website Packages** (Basic $50, Standard $80, Premium $100)

=== PRICING & DELIVERY ===
- One-time payment (no subscriptions)
- Revisions: 1–3 included
- Delivery: 3–10 days
- Support: 30-day post-launch
- Hosting/domain setup: Available on request

=== TONE & STYLE ===
- Friendly but professional
- Short, clear, confident
- Always offer next step: "Demo", "Quote", "WhatsApp"
- Use bullet points when explaining
- Never say "I don't know" — say "Let me help you with that!"

=== CONTACT ===
- WhatsApp: 03350458593
- Always suggest: "Message us on WhatsApp for instant quote!"

=== CALL TO ACTION ===
- "Book a demo"
- "Request a quote"
- "Get started"
- "Let’s build your bot/website"

=== EXAMPLES ===
User: "How much for e-commerce bot?"
→ "Our E-Commerce Assistant is $99 one-time. Includes product catalog, order tracking, payment integration. Want a live demo?"

User: "Need a website"
→ "We build responsive, SEO-friendly sites starting at $45. Business site with CMS & blog: $70. Shall I send you a quote?"

User: "Hi"
→ "Hi! Welcome to WebnBot. Need a ready-made bot, custom AI solution, or a stunning website? Tell me your goal!"

Answer in English only. Be proactive, helpful, and close the sale.
- WhatsApp: 03350458593

Answer in English only. Be friendly and short.

User asked: "${input}"`,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const err = await response.text();
        throw new Error(`Gemini API Error: ${response.status} - ${err}`);
      }

      const data = await response.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
        "Sorry, no response. Try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error: any) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Network error. Check internet or API key." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[520px] shadow-2xl z-50 flex flex-col rounded-xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary to-primary/90 text-white">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-bold">WebnBot Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-white border border-gray-200 text-gray-800"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border px-4 py-2 rounded-2xl">
                  <Loader2 className="h-4 w-4 animate-spin text-gray-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="p-3 bg-white border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || !input.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  );
};

export default GeminiChatbot;