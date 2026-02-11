import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Zap, HardHat, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const { lang } = useLanguage();
const t = translations[lang] || translations.en;

const services = [
  {
    id: "water",
    title: "Water Distribution",
    description: "AI Assistant for water network queries and leak reporting.",
    icon: Droplets,
    color: "text-blue-500",
  },
  {
    id: "electricity",
    title: "Electricity Management",
    description: "Smart grid analysis and outage support assistant.",
    icon: Zap,
    color: "text-yellow-500",
  },
  {
    id: "construction",
    title: "Intelligent Construction",
    description: "Project planning and safety regulation guide.",
    icon: HardHat,
    color: "text-orange-500",
  },
];

export default function CustomerServices() {
  const navigate = useNavigate();

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Customer Services</h1>
        <p className="text-muted-foreground mt-2">Select a service to access its dedicated AI assistant.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-transparent hover:border-l-primary cursor-pointer" onClick={() => navigate(`/dashboard/customer/chat/${service.id}`)}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-muted ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <Button className="w-full group" variant="secondary">
                Open AI Assistant
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
