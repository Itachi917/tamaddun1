import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Zap, HardHat, Bot, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const stats = [
  { title: "Water Zones Active", value: "24", icon: Droplets, color: "text-water", bg: "bg-water/10", link: "/dashboard/water" },
  { title: "Grid Stability", value: "98.2%", icon: Zap, color: "text-electricity", bg: "bg-electricity/10", link: "/dashboard/electricity" },
  { title: "Active Projects", value: "12", icon: HardHat, color: "text-construction", bg: "bg-construction/10", link: "/dashboard/construction" },
  { title: "AI Queries Today", value: "156", icon: Bot, color: "text-ai-hub", bg: "bg-ai-hub/10", link: "/dashboard/chat" },
];

const alerts = [
  { type: "warning", message: "Pressure drop detected in District 7, Zone B3", time: "12 min ago", service: "Water" },
  { type: "success", message: "Renewable integration at 42% — target reached", time: "1 hr ago", service: "Electricity" },
  { type: "warning", message: "Soil assessment pending for Project Al-Noor", time: "3 hrs ago", service: "Construction" },
];

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-3xl font-bold">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back. Here's your city infrastructure status.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.title} initial="hidden" animate="visible" variants={fadeUp} custom={i}>
            <Link to={stat.link}>
              <Card className="transition-all hover:shadow-md hover:-translate-y-0.5">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="font-display text-2xl font-bold">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-display">
            <AlertTriangle className="h-5 w-5 text-accent" /> Recent Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border/50 p-4">
                {alert.type === "warning" ? (
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                ) : (
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                )}
                <div className="flex-1">
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
