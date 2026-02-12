import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, MapPin, Layers, Eye, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const ConstructionDashboard = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const projects = [
    { name: t.construction.projects.alNoor.name, status: t.construction.status.surveying, soil: t.construction.soil.sandy, buildable: true, findings: t.construction.projects.alNoor.findings, progress: 65 },
    { name: t.construction.projects.greenValley.name, status: t.construction.status.complete, soil: t.construction.soil.clay, buildable: true, findings: t.construction.projects.greenValley.findings, progress: 100 },
  ];

  const stats = [
    { title: t.construction.stats.projects, value: "12", icon: HardHat },
    { title: t.construction.stats.zones, value: "38", icon: MapPin },
    { title: t.construction.stats.assessments, value: "24", icon: Layers },
    { title: t.construction.stats.vr, value: "8", icon: Eye },
  ];

  return (
    <div className="space-y-6">
      <div className="text-start">
        <h1 className="font-display text-3xl font-bold flex items-center gap-3">
          <HardHat className="h-8 w-8 text-primary" /> {t.construction.title}
        </h1>
        <p className="text-muted-foreground">{t.construction.subtitle}</p>
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

      <div className="grid gap-6 lg:grid-cols-2 text-start">
        {projects.map((p, i) => (
          <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader className="flex flex-row justify-between items-start">
              <CardTitle className="text-lg">{p.name}</CardTitle>
              <Badge variant="outline">{p.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>{t.construction.label.soil}: <span className="font-bold">{p.soil}</span></span>
                <span className={p.buildable ? "text-green-500 font-bold" : "text-red-500 font-bold"}>
                  {p.buildable ? t.common.yes : t.common.no}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-muted-foreground">{t.construction.label.findings}</p>
                {p.findings.map((f, idx) => (
                  <p key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                  </p>
                ))}
              </div>
              <Button className="w-full" variant="secondary">
                <Eye className="me-2 h-4 w-4" /> {t.construction.label.viewVr}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConstructionDashboard;
