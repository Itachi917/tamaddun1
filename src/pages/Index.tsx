import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Droplets, Zap, HardHat, Bot, ArrowRight, Settings, BarChart3, Eye, Send, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { translations } from "@/lib/translations";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  // 1. Language Detection Logic
  const [lang, setLang] = useState(document.documentElement.lang || "en");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setLang(document.documentElement.lang);
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const t = translations[lang as keyof typeof translations] || translations.en;

  // 2. Dynamic Services Data (Translated)
  const services = [
    {
      icon: Droplets,
      title: t.services.water.title,
      gradient: "from-primary to-accent",
      features: t.services.water.features,
    },
    {
      icon: Zap,
      title: t.services.electricity.title,
      gradient: "from-primary to-orange-500",
      features: t.services.electricity.features,
    },
    {
      icon: HardHat,
      title: t.services.construction.title,
      gradient: "from-accent to-red-900",
      features: t.services.construction.features,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
              <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-xl font-bold">Tamaddun</span>
          </Link>
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav.services}</a>
            <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav.howItWorks}</a>
            <a href="#ai-hub" className="text-sm text-muted-foreground transition-colors hover:text-foreground">{t.nav.aiHub}</a>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button asChild>
              <Link to="/dashboard">
                {t.nav.dashboard} <ArrowRight className="ms-1 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-16"
        style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              {t.hero.badge}
            </span>
          </motion.div>
          <motion.h1 className="mx-auto mb-6 max-w-4xl font-display text-5xl font-bold leading-tight text-white md:text-7xl"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}>
            {t.hero.title1} <span className="bg-gradient-to-r from-primary to-yellow-200 bg-clip-text text-transparent">{t.hero.title2}</span> {t.hero.title3}
          </motion.h1>
          <motion.p className="mx-auto mb-10 max-w-2xl text-lg text-primary md:text-xl font-medium"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}>
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="mb-16 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl text-white">{t.nav.services}</h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <motion.div key={service.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i + 1}>
                <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                  <CardContent className="p-8 text-start">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <service.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="mb-4 font-display text-2xl font-bold text-white">{service.title}</h3>
                    <ul className="space-y-3">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary rtl:rotate-180" />
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
        <div className="container mx-auto px-4 text-center md:text-start">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg">
                <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-lg font-bold text-white">Tamaddun</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2026 Tamaddun. {t.footer.copy}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
