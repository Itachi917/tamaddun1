import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User, Droplets, Zap, HardHat } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

type Message = { role: "user" | "bot"; text: string; icon?: React.ReactNode };

const ChatHub = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: t.aiChat.welcome },
  ]);
  const [input, setInput] = useState("");

  const presetQuestions = [
    { label: t.aiChat.presets.water, icon: <Droplets className="h-4 w-4" />, question: t.aiChat.questions.water },
    { label: t.aiChat.presets.electricity, icon: <Zap className="h-4 w-4" />, question: t.aiChat.questions.electricity },
    { label: t.aiChat.presets.construction, icon: <HardHat className="h-4 w-4" />, question: t.aiChat.questions.construction },
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text };
    
    // Logic to find translated response based on question match
    let botText = t.aiChat.responses.fallback;
    if (text === t.aiChat.questions.water) botText = t.aiChat.responses.water;
    if (text === t.aiChat.questions.electricity) botText = t.aiChat.responses.electricity;
    if (text === t.aiChat.questions.construction) botText = t.aiChat.responses.construction;

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => setMessages((prev) => [...prev, { role: "bot", text: botText }]), 800);
  };

  return (
    <div className="flex h-[calc(100vh-5rem)] flex-col space-y-4">
      <div className="text-start">
        <h1 className="font-display text-3xl font-bold flex items-center gap-3">
          <Bot className="h-8 w-8 text-primary" /> {t.aiChat.title}
        </h1>
        <p className="text-muted-foreground">{t.aiChat.subtitle}</p>
      </div>

      <Card className="flex flex-1 flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="flex flex-1 flex-col p-0 overflow-hidden">
          <div className="flex-1 space-y-4 overflow-y-auto p-6 scrollbar-hide">
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.role === "bot" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-xl px-4 py-3 text-sm whitespace-pre-line text-start ${
                    msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted border border-border/50"
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border/50 px-6 py-3">
            {presetQuestions.map((q) => (
              <Button key={q.label} variant="outline" size="sm" onClick={() => handleSend(q.question)} className="gap-2">
                {q.icon} {q.label}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-border/50 p-4 bg-background/50">
            <Input placeholder={t.aiChat.placeholder} value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              className="flex-1"
            />
            <Button size="icon" onClick={() => handleSend(input)}>
              <Send className="h-4 w-4 rtl:rotate-180" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatHub;
