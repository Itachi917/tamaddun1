import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, AlertTriangle, TrendingUp, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const WaterDashboard = () => {
  // --- HOOKS MUST BE INSIDE HERE ---
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const chartData = [
    { month: "Jan", efficiency: 82 }, { month: "Feb", efficiency: 85 },
    { month: "Mar", efficiency: 83 }, { month: "Apr", efficiency: 88 },
    { month: "May", efficiency: 91 }, { month: "Jun", efficiency: 93 },
    { month: "Jul", efficiency: 90 }, { month: "Aug", efficiency: 94 },
  ];

  const stats = [
    { title: t.water.stats.flow, value: "24", icon: Droplets },
    { title: t.water.stats.alerts, value: "3", icon: AlertTriangle },
    { title: t.water.stats.quality, value: "96.4", icon: Activity },
    { title: t.water.stats.efficiency, value: "94%", icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="text-start">
        <h1 className="font-display text-3xl font-bold flex items-center gap-3">
          <Droplets className="h-8 w-8 text-primary" /> {t.water.title}
        </h1>
        <p className="text-muted-foreground">{t.water.subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-start">
        {stats.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.title}</p>
                  <p className="font-display text-2xl font-bold">{s.value}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="font-display text-start">{t.water.chartTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Area type="monotone" dataKey="efficiency" stroke="hsl(var(--primary))" fill="url(#waterGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterDashboard;
