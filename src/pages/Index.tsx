import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Droplets, Zap, HardHat, Bot, ArrowRight, Settings, BarChart3, Eye, Send, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: Droplets,
    title: "Water Management",
    color: "water",
    gradient: "from-primary to-accent",
    features: [
      "Smart distribution across cities & neighborhoods",
      "Leak detection & water loss reduction",
      "Water quality monitoring",
      "Predictive fault maintenance",
    ],
  },
  {
    icon: Zap,
    title: "Electricity Management",
    color: "electricity",
    gradient: "from-primary to-orange-500",
    features: [
      "Smart low & medium voltage distribution",
      "Grid stability & loss reduction",
      "Renewable energy integration",
      "Predictive fault detection",
    ],
  },
  {
    icon: HardHat,
    title: "Construction Intelligence",
    color: "construction",
    gradient: "from-accent to-red-900",
    features: [
      "Drone-based land surveying",
      "Soil type & buildability assessment",
      "Underground hazard detection",
      "VR visualization of final buildings",
    ],
  },
];

const steps = [
  { icon: Settings, title: "Select Service", desc: "Choose Water, Electricity, or Construction" },
  { icon: Send, title: "Input Data", desc: "Provide location and project details" },
  { icon: BarChart3, title: "Get AI Insights", desc: "Receive intelligent analysis & predictions" },
  { icon: Eye, title: "Take Action", desc: "Implement optimized solutions" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <img 
                src="/logo.png" 
                alt="Tamaddun Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
            <span className="font-display text-xl font-bold">Tamaddun</span>
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Services</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
            <a href="#ai-hub" className="text-sm text-muted-foreground transition-colors hover:text-foreground">AI Hub</a>
          </div>
          <Button asChild>
            <Link to="/dashboard">Explore Dashboard <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16"
        style={{ background: "var(--gradient-hero)" }}>
        {/* Grid pattern updated for visibility */}
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-grid-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px] animate-grid-pulse" style={{ animationDelay: "2s" }} />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Smart Urban Infrastructure Platform
            </span>
          </motion.div>
          <motion.h1
            className="mx-auto mb-6 max-w-4xl font-display text-5xl font-bold leading-tight text-white md:text-7xl"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-primary to-yellow-200 bg-clip-text text-transparent">
              Smarter
            </span>{" "}
            Cities
          </motion.h1>
          <motion.p
            className="mx-auto mb-10 max-w-2xl text-lg text-primary md:text-xl font-medium"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            Tamaddun empowers cities with AI-driven solutions for water distribution,
            electricity management, and intelligent construction — all in one platform.
          </motion.p>
          <motion.div className="flex flex-wrap items-center justify-center gap-4" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <Link to="/dashboard">Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base border-primary text-primary hover:bg-primary/10">
              <a href="#services">Learn More</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl text-white">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Three pillars of smart infrastructure, powered by AI and real-time data.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                  <CardContent className="p-8">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="mb-4 font-display text-2xl font-bold text-white">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <img 
                  src="/logo.png" 
                  alt="Tamaddun Logo" 
                  className="h-full w-full object-contain" 
                />
              </div>
              <span className="font-display text-lg font-bold text-white">Tamaddun</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Tamaddun. Building Smarter Cities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
