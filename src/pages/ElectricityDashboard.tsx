import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AlertTriangle, TrendingUp, Activity, Leaf } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { motion } from "framer-motion";

const chartData = [
  { zone: "Zone A", load: 78, loss: 4 },
  { zone: "Zone B", load: 92, loss: 6 },
  { zone: "Zone C", load: 65, loss: 3 },
  { zone: "Zone D", load: 88, loss: 8 },
  { zone: "Zone E", load: 71, loss: 5 },
  { zone: "Zone F", load: 95, loss: 7 },
];

const stats = [
  { title: "Grid Load", value: "82%", icon: Zap },
  { title: "Renewable %", value: "42%", icon: Leaf },
  { title: "Stability Score", value: "98.2", icon: Activity },
  { title: "Loss Rate", value: "5.3%", icon: TrendingUp },
];

const alerts = [
  { severity: "medium", message: "Transformer T-14 showing temperature rise — predicted fault in 48hrs", time: "30 min ago" },
  { severity: "low", message: "Solar panel array P-7 output below expected by 12%", time: "4 hrs ago" },
  { severity: "high", message: "Voltage fluctuation detected in Zone D — auto-correction applied", time: "1 hr ago" },
];

const ElectricityDashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-display text-3xl font-bold flex items-center gap-3">
        <Zap className="h-8 w-8 text-electricity" /> Electricity Management
      </h1>
      <p className="text-muted-foreground">Monitor grid stability, energy distribution, and renewable integration.</p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electricity/10">
                <s.icon className="h-6 w-6 text-electricity" />
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
      <CardHeader><CardTitle className="font-display">Energy Distribution & Loss by Zone</CardTitle></CardHeader>
      <CardContent>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220,15%,88%)" />
              <XAxis dataKey="zone" stroke="hsl(220,10%,46%)" fontSize={12} />
              <YAxis stroke="hsl(220,10%,46%)" fontSize={12} />
              <Tooltip />
              <Bar dataKey="load" name="Load %" fill="hsl(45,95%,55%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="loss" name="Loss %" fill="hsl(28,90%,55%)" radius={[4, 4, 0, 0]} />
            </BarChart>
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

export default ElectricityDashboard;
