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
    gradient: "from-[hsl(200,85%,50%)] to-[hsl(180,70%,45%)]",
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
    gradient: "from-[hsl(45,95%,55%)] to-[hsl(28,90%,55%)]",
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
    gradient: "from-[hsl(28,90%,55%)] to-[hsl(15,80%,50%)]",
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
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[hsl(200,85%,50%)]">
              <span className="text-lg font-bold text-primary-foreground">T</span>
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

      {/* Hero */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16"
        style={{ background: "var(--gradient-hero)" }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(hsl(217 91% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 50% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-grid-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[hsl(200,85%,50%)]/20 blur-[100px] animate-grid-pulse" style={{ animationDelay: "2s" }} />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/90">
              Smart Urban Infrastructure Platform
            </span>
          </motion.div>
          <motion.h1
            className="mx-auto mb-6 max-w-4xl font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Building{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(200,85%,50%)] bg-clip-text text-transparent">
              Smarter
            </span>{" "}
            Cities
          </motion.h1>
         <motion.p
  className="mx-auto mb-10 max-w-2xl text-lg text-primary md:text-xl"
  initial="hidden" animate="visible" variants={fadeUp} custom={2}
>
  Tamaddun empowers cities with AI-driven solutions for water distribution,
  electricity management, and intelligent construction — all in one platform.
</motion.p>
          <motion.div className="flex flex-wrap items-center justify-center gap-4" initial="hidden" animate="visible" variants={fadeUp} custom={3}>
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <Link to="/dashboard">Explore Dashboard <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
           <Button size="lg" variant="default" asChild className="h-12 px-8 text-base">
           <a href="#services">Learn More</a>
           </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Three pillars of smart infrastructure, powered by AI and real-time data.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                  <CardContent className="p-8">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-4 font-display text-2xl font-bold">{service.title}</h3>
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

      {/* How It Works */}
      <section id="how-it-works" className="border-y border-border/50 bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              From data collection to actionable insights in four simple steps.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div key={step.title} className="relative text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mb-2 font-display text-sm font-semibold text-primary">Step {i + 1}</div>
                <h3 className="mb-2 font-display text-xl font-bold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-8 hidden h-5 w-5 text-muted-foreground/40 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Hub Preview */}
      <section id="ai-hub" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="mb-4 inline-block rounded-full bg-[hsl(270,70%,55%)]/10 px-4 py-1.5 text-sm font-medium text-ai-hub">
                AI-Powered
              </span>
              <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">City Intelligence Hub</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Ask questions about any infrastructure issue in your city. Our AI assistant provides real-time insights, diagnostics, and recommendations.
              </p>
              <Button asChild size="lg">
                <Link to="/dashboard/chat">Try the AI Hub <Bot className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <Card className="overflow-hidden border-border/50 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-3">
                  <Bot className="h-5 w-5 text-ai-hub" />
                  <span className="font-display text-sm font-semibold">City Intelligence Hub</span>
                  <div className="ml-auto flex gap-1">
                    <div className="h-2.5 w-2.5 rounded-full bg-secondary" />
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
                <CardContent className="space-y-4 p-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ai-hub/10">
                      <Bot className="h-4 w-4 text-ai-hub" />
                    </div>
                    <div className="rounded-xl rounded-tl-none bg-muted px-4 py-2.5 text-sm">
                      Welcome to Tamaddun! How can I help with your city's infrastructure today?
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <div className="rounded-xl rounded-tr-none bg-primary px-4 py-2.5 text-sm text-primary-foreground">
                      There's a water leak in District 7. Can you check?
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ai-hub/10">
                      <Bot className="h-4 w-4 text-ai-hub" />
                    </div>
                    <div className="rounded-xl rounded-tl-none bg-muted px-4 py-2.5 text-sm">
                      <p className="font-medium">🔍 Leak Detected — District 7, Zone B3</p>
                      <p className="mt-1 text-muted-foreground">Pressure drop of 15% detected. Maintenance crew dispatched. ETA: 45 minutes.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[hsl(200,85%,50%)]">
                <span className="text-sm font-bold text-primary-foreground">T</span>
              </div>
              <span className="font-display text-lg font-bold">Tamaddun</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Tamaddun. Building Smarter Cities.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
