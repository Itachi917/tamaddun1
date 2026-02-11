import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Bot, User } from "lucide-react";
import { useState } from "react";

export default function ServiceAI() {
  const { service } = useParams(); // Gets 'water', 'electricity', etc. from URL
  const [messages, setMessages] = useState([
    { role: "ai", content: `Hello! I am your specialized ${service} assistant. How can I help you with ${service} today?` }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMsg = { role: "user", content: input };
    setMessages([...messages, newMsg]);
    setInput("");
    
    // Simulate AI Response (You can connect real API here later)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "ai", 
        content: `I am analyzing your request regarding ${service}... (This is a demo response)` 
      }]);
    }, 1000);
  };

  const getServiceColor = () => {
    if (service === 'water') return 'text-blue-500';
    if (service === 'electricity') return 'text-yellow-500';
    if (service === 'construction') return 'text-orange-500';
    return 'text-primary';
  };

  return (
    <div className="h-[calc(100vh-2rem)] flex flex-col gap-4 p-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-2 mb-2">
        <Bot className={`h-8 w-8 ${getServiceColor()}`} />
        <h1 className="text-2xl font-bold capitalize">{service} AI Assistant</h1>
      </div>

      <Card className="flex-1 flex flex-col overflow-hidden border-2">
        <CardHeader className="border-b bg-muted/40 py-3">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Specialized Model: Tamaddun-{service}-v1
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-0 overflow-hidden relative">
          <ScrollArea className="h-full p-4">
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.role === 'ai' && <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center"><Bot className="h-5 w-5" /></div>}
                  <div className={`p-3 rounded-lg max-w-[80%] ${m.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    {m.content}
                  </div>
                  {m.role === 'user' && <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><User className="h-5 w-5 text-primary-foreground" /></div>}
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <div className="p-4 border-t bg-background">
          <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
            <Input 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder={`Ask about ${service}...`} 
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
