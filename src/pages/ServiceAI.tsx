import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const ThinkingIndicator = () => (
  <div className="flex gap-1.5 p-3 rounded-lg bg-muted w-max">
    {[0, 1, 2].map((i) => (
      <motion.div key={i} className="h-2 w-2 rounded-full bg-primary" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }} />
    ))}
  </div>
);

export default function ServiceAI() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;
  const { service } = useParams();
  const [messages, setMessages] = useState([{ role: "ai", content: t.aiChat.welcome }]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = () => {
    if (!input.trim() || isThinking) return;
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      setMessages(prev => [...prev, { role: "ai", content: t.aiChat.responses.fallback }]);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-5rem)] flex flex-col gap-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-2 text-start">
        <Bot className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold capitalize">{service} {t.aiChat.title}</h1>
      </div>
      <Card className="flex-1 flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm border-2">
        <CardHeader className="border-b py-3 text-start">
          <CardTitle className="text-sm font-medium text-muted-foreground">Specialized Model: Tamaddun-{service}-v1</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 overflow-hidden relative">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4 pb-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-lg max-w-[80%] text-start ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted border border-border/50'}`}>{m.content}</div>
                </div>
              ))}
              {isThinking && <ThinkingIndicator />}
            </div>
          </ScrollArea>
        </CardContent>
        <div className="p-4 border-t bg-background flex gap-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder={t.aiChat.placeholder} className="flex-1" />
          <Button onClick={handleSend} size="icon" disabled={isThinking}><Send className="h-4 w-4 rtl:rotate-180" /></Button>
        </div>
      </Card>
    </div>
  );
}
