import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, HardHat, Bot, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const { lang } = useLanguage();
const t = translations[lang] || translations.en;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const DashboardOverview = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const stats = [
    { title: t.dashboard.stats.water, value: "24", icon: Droplets, color: "text-water", bg: "bg-water/10", link: "/dashboard/staff/water" },
    { title: t.dashboard.stats.grid, value: "98.2%", icon: Zap, color: "text-electricity", bg: "bg-electricity/10", link: "/dashboard/staff/electricity" },
    { title: t.dashboard.stats.projects, value: "12", icon: HardHat, color: "text-construction", bg: "bg-construction/10", link: "/dashboard/staff/construction" },
    { title: t.dashboard.stats.ai, value: "156", icon: Bot, color: "text-ai-hub", bg: "bg-ai-hub/10", link: "/dashboard/staff/chat" },
  ];

  const alerts = [
    { type: "warning", message: t.dashboard.alertMsgs.pressure, time: lang === 'ar' ? "منذ ١٢ دقيقة" : "12 min ago", service: t.sidebar.water },
    { type: "success", message: t.dashboard.alertMsgs.renewable, time: lang === 'ar' ? "منذ ساعة" : "1 hr ago", service: t.sidebar.electricity },
    { type: "warning", message: t.dashboard.alertMsgs.soil, time: lang === 'ar' ? "منذ ٣ ساعات" : "3 hrs ago", service: t.sidebar.construction },
  ];

  return (
    <div className="space-y-6">
      <div className="text-start">
        <h1 className="font-display text-3xl font-bold">{t.dashboard.title}</h1>
        <p className="text-muted-foreground">{t.dashboard.subtitle}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.title} initial="hidden" animate="visible" variants={fadeUp} custom={i}>
            <Link to={stat.link}>
              <Card className="transition-all hover:shadow-md hover:-translate-y-0.5 bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-start">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="font-display text-2xl font-bold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display text-start">
            <AlertTriangle className="h-5 w-5 text-accent" /> {t.dashboard.alertsTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border/50 p-4 bg-background/50">
                {alert.type === "warning" ? (
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                ) : (
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                )}
                <div className="flex-1 text-start">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.service} · {alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
