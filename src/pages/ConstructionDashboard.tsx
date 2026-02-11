import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, MapPin, Layers, Eye, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Al-Noor District",
    status: "Surveying",
    soil: "Sandy Loam",
    buildable: true,
    findings: ["2 underground wells detected", "No cavities found"],
    progress: 65,
  },
  {
    name: "Green Valley Phase 2",
    status: "Assessment Complete",
    soil: "Clay",
    buildable: true,
    findings: ["1 small cavity at 12m depth", "High water table"],
    progress: 100,
  },
  {
    name: "Desert Bloom City",
    status: "Planning",
    soil: "Rocky Sand",
    buildable: false,
    findings: ["Unstable bedrock layer", "Requires deep foundation"],
    progress: 30,
  },
];

const stats = [
  { title: "Active Projects", value: "12", icon: HardHat },
  { title: "Zones Surveyed", value: "38", icon: MapPin },
  { title: "Assessments Done", value: "24", icon: Layers },
  { title: "VR Previews", value: "8", icon: Eye },
];

const ConstructionDashboard = () => (
  <div className="space-y-6">
    <div>
      <h1 className="font-display text-3xl font-bold flex items-center gap-3">
        <HardHat className="h-8 w-8 text-construction" /> Construction Intelligence
      </h1>
      <p className="text-muted-foreground">Drone surveying, land assessment, and VR visualization.</p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s, i) => (
        <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-construction/10">
                <s.icon className="h-6 w-6 text-construction" />
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

    <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {projects.map((p, i) => (
        <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
          <Card className="h-full">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="font-display text-lg">{p.name}</CardTitle>
                <Badge variant={p.status === "Assessment Complete" ? "default" : "secondary"} className="text-xs">
                  {p.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Soil Type</p>
                  <p className="font-medium">{p.soil}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Buildable</p>
                  <p className={`font-medium flex items-center gap-1 ${p.buildable ? "text-secondary" : "text-destructive"}`}>
                    {p.buildable ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                    {p.buildable ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm text-muted-foreground">Drone Scan Findings</p>
                <div className="space-y-1">
                  {p.findings.map((f) => (
                    <p key={f} className="text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-construction" /> {f}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1 flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{p.progress}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-construction to-[hsl(15,80%,50%)]" style={{ width: `${p.progress}%` }} />
                </div>
              </div>

              <Button variant="outline" className="w-full" size="sm">
                <Eye className="mr-2 h-4 w-4" /> View Final Building in VR
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ConstructionDashboard;
