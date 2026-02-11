import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User, Droplets, Zap, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "bot"; text: string; icon?: React.ReactNode };

const presetQuestions = [
  { label: "Report a water leak", icon: <Droplets className="h-4 w-4" />, question: "There's a water leak in my neighborhood. Can you help?" },
  { label: "Check electricity status", icon: <Zap className="h-4 w-4" />, question: "What's the current electricity grid status in Zone D?" },
  { label: "Construction readiness", icon: <HardHat className="h-4 w-4" />, question: "Is the land in Al-Noor District ready for construction?" },
];

const botResponses: Record<string, string> = {
  "There's a water leak in my neighborhood. Can you help?":
    "🔍 **Leak Analysis — Your Area**\n\nI've detected a pressure anomaly in your district. Here's what I found:\n\n• **Location:** District 7, Zone B3\n• **Pressure Drop:** 15% below normal\n• **Estimated Leak Rate:** 2.3 L/min\n• **Status:** Maintenance crew dispatched\n• **ETA:** 45 minutes\n\nI'll notify you once the repair is complete.",
  "What's the current electricity grid status in Zone D?":
    "⚡ **Grid Status — Zone D**\n\n• **Current Load:** 88% capacity\n• **Stability Score:** 97.1 / 100\n• **Voltage:** Stable at 220V ±2%\n• **Renewable Contribution:** 38%\n• **Alert:** Transformer T-14 showing elevated temperature. Predicted fault window: 48 hours. Preventive maintenance scheduled.\n\nOverall: Grid is **stable** with one monitored concern.",
  "Is the land in Al-Noor District ready for construction?":
    "🏗️ **Land Assessment — Al-Noor District**\n\n• **Soil Type:** Sandy Loam\n• **Buildability:** ✅ Suitable for construction\n• **Underground Scan:**\n  - 2 underground wells detected (mapped)\n  - No cavities or voids found\n  - Stable bedrock at 8m depth\n• **Drone Survey:** 65% complete\n• **Recommendation:** Proceed with foundation planning. Wells have been marked for avoidance.\n\nWould you like to view the VR preview of the planned buildings?",
};

const ChatHub = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Welcome to the **City Intelligence Hub**! 👋\n\nI can help you with water, electricity, and construction infrastructure queries. Try one of the quick questions below, or type your own." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    const botReply: Message = {
      role: "bot",
      text: botResponses[text] || "I'm analyzing your query. In a full deployment, I'd connect to real-time infrastructure data to provide you with accurate insights. For now, try one of the preset questions to see a demo response!",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => setMessages((prev) => [...prev, botReply]), 800);
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col">
      <div className="mb-4">
        <h1 className="font-display text-3xl font-bold flex items-center gap-3">
          <Bot className="h-8 w-8 text-ai-hub" /> City Intelligence Hub
        </h1>
        <p className="text-muted-foreground">AI-powered infrastructure assistant</p>
      </div>

      <Card className="flex flex-1 flex-col overflow-hidden">
        <CardContent className="flex flex-1 flex-col p-0">
          {/* Messages */}
          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
                >
                  {msg.role === "bot" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ai-hub/10">
                      <Bot className="h-4 w-4 text-ai-hub" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-xl px-4 py-3 text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "rounded-tr-none bg-primary text-primary-foreground"
                        : "rounded-tl-none bg-muted"
                    }`}
                  >
                    {msg.text.split("**").map((part, j) =>
                      j % 2 === 1 ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
                    )}
                  </div>
                  {msg.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Preset questions */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-border/50 px-6 py-3">
              {presetQuestions.map((q) => (
                <Button key={q.label} variant="outline" size="sm" onClick={() => handleSend(q.question)} className="gap-2">
                  {q.icon} {q.label}
                </Button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-border/50 p-4">
            <Input
              placeholder="Ask about infrastructure..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              className="flex-1"
            />
            <Button size="icon" onClick={() => handleSend(input)}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatHub;
