import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Droplets, Zap, HardHat, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

export default function CustomerServices() {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const services = [
    { id: "water", title: t.water.title, description: t.water.desc, icon: Droplets, color: "text-blue-500" },
    { id: "electricity", title: t.electricity.title, description: t.electricity.desc, icon: Zap, color: "text-yellow-500" },
    { id: "construction", title: t.construction.title, description: t.construction.desc, icon: HardHat, color: "text-orange-500" },
  ];

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="text-start">
        <h1 className="text-3xl font-bold tracking-tight text-primary">{t.sidebar.customerLabel}</h1>
        <p className="text-muted-foreground mt-2">{t.dashboard.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-all cursor-pointer bg-card/50 backdrop-blur-sm" onClick={() => navigate(`/dashboard/customer/chat/${service.id}`)}>
            <CardHeader className="text-start">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-muted ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-start">
              <CardDescription className="mb-4">{service.description}</CardDescription>
              <Button className="w-full group" variant="secondary">
                {t.aiChat.button}
                <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
