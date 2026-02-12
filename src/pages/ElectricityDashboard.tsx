import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Activity, Leaf, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const ElectricityDashboard = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const stats = [
    { title: t.electricity.stats.load, value: "82%", icon: Zap },
    { title: t.electricity.stats.renewable, value: "42%", icon: Leaf },
    { title: t.electricity.stats.stability, value: "98.2", icon: Activity },
    { title: t.electricity.stats.loss, value: "5.3%", icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="text-start">
        <h1 className="font-display text-3xl font-bold flex items-center gap-3">
          <Zap className="h-8 w-8 text-primary" /> {t.electricity.title}
        </h1>
        <p className="text-muted-foreground">{t.electricity.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4 text-start">
        {stats.map((s, i) => (
          <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.title}</p>
                <p className="text-2xl font-bold">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader><CardTitle className="text-start">{t.electricity.chartTitle}</CardTitle></CardHeader>
        <CardContent className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={[{z: 'A', l: 40}, {z: 'B', l: 70}, {z: 'C', l: 45}]}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="z" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="l" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default ElectricityDashboard;
