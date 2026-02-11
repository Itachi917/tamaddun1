import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, AlertTriangle, TrendingUp, Activity } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const chartData = [
  { month: "Jan", efficiency: 82 }, { month: "Feb", efficiency: 85 },
  { month: "Mar", efficiency: 83 }, { month: "Apr", efficiency: 88 },
  { month: "May", efficiency: 91 }, { month: "Jun", efficiency: 93 },
  { month: "Jul", efficiency: 90 }, { month: "Aug", efficiency: 94 },
];

const stats = [
  { title: "Distribution Zones", value: "24", icon: Droplets },
  { title: "Active Alerts", value: "3", icon: AlertTriangle },
  { title: "Water Quality Index", value: "96.4", icon: Activity },
  { title: "Efficiency", value: "94%", icon: TrendingUp },
];

const alerts = [
  { severity: "high", message: "Pressure drop in District 7, Zone B3 — possible leak", time: "12 min ago" },
  { severity: "medium", message: "Quality sensor maintenance due in Zone A1", time: "2 hrs ago" },
  { severity: "low", message: "Predicted pressure fluctuation in Zone C5 tomorrow", time: "5 hrs ago" },
];

const WaterDashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-display text-3xl font-bold flex items-center gap-3">
        <Droplets className="h-8 w-8 text-water" /> Water Management
      </h1>
      <p className="text-muted-foreground">Monitor water distribution, quality, and predictive alerts.</p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-water/10">
                <s.icon className="h-6 w-6 text-water" />
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

    <Card>
      <CardHeader><CardTitle className="font-display">Distribution Efficiency Over Time</CardTitle></CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(200,85%,50%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(200,85%,50%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,88%)" />
              <XAxis dataKey="month" stroke="hsl(220,10%,46%)" fontSize={12} />
              <YAxis stroke="hsl(220,10%,46%)" fontSize={12} />
              <Tooltip />
              <Area type="monotone" dataKey="efficiency" stroke="hsl(200,85%,50%)" fill="url(#waterGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader><CardTitle className="font-display flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-accent" /> Alerts & Predictions</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((a, i) => (
          <div key={i} className={`rounded-lg border p-4 ${a.severity === "high" ? "border-destructive/30 bg-destructive/5" : a.severity === "medium" ? "border-accent/30 bg-accent/5" : "border-border/50"}`}>
            <p className="text-sm font-medium">{a.message}</p>
            <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  </div>
);

export default WaterDashboard;
