export const translations = {
  en: {
    common: { yes: "Yes", no: "No", back: "Back", loading: "Loading...", notFound: "Page Not Found" },
    nav: { services: "Services", howItWorks: "How It Works", aiHub: "AI Hub", dashboard: "Dashboard" },
    hero: {
      badge: "Smart Urban Infrastructure Platform",
      title1: "Building", title2: "Smarter", title3: "Cities",
      subtitle: "Tamaddun empowers cities with AI-driven solutions for water, electricity, and construction."
    },
    sidebar: {
      staffLabel: "Staff Portal", customerLabel: "Customer Portal",
      overview: "Overview", water: "Water System", electricity: "Electricity",
      construction: "Construction", chat: "Staff Chat", servicePortal: "Service Portal",
      backHome: "Back to Home", settings: "Settings"
    },
    // --- HOME PAGE SECTIONS ---
    howItWorks: {
      title: "How It Works",
      steps: [
        { title: "Select Service", desc: "Choose Water, Electricity, or Construction" },
        { title: "Input Data", desc: "Provide location and project details" },
        { title: "Get AI Insights", desc: "Receive intelligent analysis & predictions" },
        { title: "Take Action", desc: "Implement optimized solutions" }
      ]
    },
    aiHub: {
      badge: "AI-Powered",
      title: "City Intelligence Hub",
      desc: "Ask questions about any infrastructure issue in your city. Our AI assistant provides real-time insights."
    },
    // --- DASHBOARD & TOOLS ---
    dashboard: {
      title: "Dashboard Overview",
      subtitle: "Welcome back. Here's your city infrastructure status.",
      welcome: "Welcome back, Yousuf",
      alertsTitle: "Recent Alerts",
      stats: {
        active: "Active Systems", alerts: "Critical Alerts", efficiency: "Grid Efficiency",
        water: "Water Zones Active", grid: "Grid Stability", projects: "Active Projects", ai: "AI Queries Today"
      },
      alertMsgs: {
        pressure: "Pressure drop detected in District 7, Zone B3",
        renewable: "Renewable integration at 42% — target reached",
        soil: "Soil assessment pending for Project Al-Noor"
      }
    },
    water: {
      title: "Water Management", subtitle: "Monitor distribution, quality, and predictive alerts.",
      stats: { flow: "Distribution Zones", alerts: "Active Alerts", quality: "Water Quality Index", efficiency: "Efficiency" },
      chartTitle: "Distribution Efficiency Over Time",
      features: ["Smart distribution", "Leak detection", "Quality monitoring", "Fault maintenance"],
      desc: "AI Assistant for water network queries and leak reporting."
    },
    electricity: {
      title: "Electricity Management", subtitle: "Monitor grid stability and renewable integration.",
      stats: { load: "Grid Load", renewable: "Renewable %", stability: "Stability Score", loss: "Loss Rate", voltage: "Voltage" },
      chartTitle: "Energy Distribution & Loss by Zone",
      features: ["Voltage distribution", "Grid stability", "Renewable integration", "Fault detection"],
      desc: "Smart grid analysis and outage support assistant."
    },
    construction: {
      title: "Construction Intelligence", subtitle: "Drone surveying and land assessment.",
      stats: { projects: "Active Projects", zones: "Zones Surveyed", assessments: "Assessments Done", vr: "VR Previews" },
      label: { soil: "Soil Type", buildable: "Buildable", viewVr: "View Final Building in VR", progress: "Progress", findings: "Drone Scan Findings" },
      status: { surveying: "Surveying", complete: "Assessment Complete", planning: "Planning" },
      soil: { sandy: "Sandy Loam", clay: "Clay", rocky: "Rocky Sand" },
      projects: {
        alNoor: { name: "Al-Noor District", findings: ["2 underground wells detected", "No cavities found"] },
        greenValley: { name: "Green Valley Phase 2", findings: ["1 small cavity at 12m depth", "High water table"] },
        desertBloom: { name: "Desert Bloom City", findings: ["Unstable bedrock layer", "Requires deep foundation"] }
      },
      features: ["Drone surveying", "Soil assessment", "Hazard detection", "VR visualization"],
      desc: "Project planning and safety regulation guide."
    },
    aiChat: {
      title: "City Intelligence Hub",
      subtitle: "AI-powered infrastructure assistant",
      welcome: "Welcome to the **City Intelligence Hub**! 👋\n\nI can help you with water, electricity, and construction queries.",
      placeholder: "Ask about infrastructure...",
      thinking: "Thinking...",
      button: "Open AI Assistant",
      presets: { water: "Water Leak", electricity: "Grid Status", construction: "Land Readiness" },
      questions: {
        water: "There's a water leak in my neighborhood. Can you help?",
        electricity: "What's the current electricity grid status in Zone D?",
        construction: "Is the land in Al-Noor District ready for construction?"
      },
      responses: {
        fallback: "I'm analyzing your query. In a full deployment, I'd connect to real-time infrastructure data. Try a preset question for a demo!",
        water: "🔍 **Leak Analysis**\n\nI've detected a pressure anomaly in District 7, Zone B3. Crew dispatched. ETA: 45 minutes.",
        electricity: "⚡ **Grid Status**\n\nZone D load is at 88%. Stability is 97.1. Renewable share is 38%.",
        construction: "🏗️ **Land Assessment**\n\nAl-Noor District is **Suitable**. Bedrock is stable at 8m. Marks marked for avoidance."
      }
    },
    footer: { copy: "Building Smarter Cities." }
  },
  ar: {
    common: { yes: "نعم", no: "لا", back: "رجوع", loading: "جاري التحميل...", notFound: "الصفحة غير موجودة" },
    nav: { services: "خدماتنا", howItWorks: "كيف نعمل", aiHub: "مركز الذكاء", dashboard: "لوحة التحكم" },
    hero: {
      badge: "منصة البنية التحتية الحضرية الذكية",
      title1: "نبني", title2: "مدناً", title3: "أذكى",
      subtitle: "تمدن تمكن المدن بحلول مدعومة بالذكاء الاصطناعي لتوزيع المياه والكهرباء والإنشاءات."
    },
    sidebar: {
      staffLabel: "بوابة الموظفين", customerLabel: "بوابة المشتركين",
      overview: "نظرة عامة", water: "نظام المياه", electricity: "الكهرباء",
      construction: "الإنشاءات", chat: "دردشة الموظفين", servicePortal: "بوابة الخدمات",
      backHome: "العودة للرئيسية", settings: "الإعدادات"
    },
    // --- HOME PAGE SECTIONS ---
    howItWorks: {
      title: "كيف نعمل",
      steps: [
        { title: "اختر الخدمة", desc: "اختر المياه أو الكهرباء أو الإنشاءات" },
        { title: "إدخال البيانات", desc: "تقديم تفاصيل الموقع والمشروع" },
        { title: "الحصول على رؤى", desc: "تلقي تحليلات وتوقعات ذكية" },
        { title: "اتخاذ الإجراء", desc: "تنفيذ الحلول المحسنة" }
      ]
    },
    aiHub: {
      badge: "مدعوم بالذكاء الاصطناعي",
      title: "مركز ذكاء المدينة",
      desc: "اطرح أسئلة حول أي قضية بنية تحتية في مدينتك. يوفر مساعدنا رؤى فورية."
    },
    // --- DASHBOARD & TOOLS ---
    dashboard: {
      title: "نظرة عامة على لوحة التحكم",
      subtitle: "مرحباً بك مجدداً. إليك حالة البنية التحتية للمدينة.",
      welcome: "مرحباً بك مجدداً، يوسف",
      alertsTitle: "التنبيهات الأخيرة",
      stats: {
        active: "الأنظمة النشطة", alerts: "تنبيهات حرجة", efficiency: "كفاءة الشبكة",
        water: "مناطق المياه النشطة", grid: "استقرار الشبكة", projects: "المشاريع النشطة", ai: "استعلامات الذكاء اليوم"
      },
      alertMsgs: {
        pressure: "تم اكتشاف انخفاض في الضغط في الحي 7، المنطقة B3",
        renewable: "تكامل الطاقة المتجددة بنسبة 42% - تم الوصول للهدف",
        soil: "تقييم التربة معلق لمشروع النور"
      }
    },
    water: {
      title: "إدارة المياه", subtitle: "مراقبة التوزيع والجودة والتنبيهات التنبؤية.",
      stats: { flow: "مناطق التوزيع", alerts: "التنبيهات النشطة", quality: "مؤشر جودة المياه", efficiency: "الكفاءة" },
      chartTitle: "كفاءة التوزيع بمرور الوقت",
      features: ["التوزيع الذكي", "كشف التسريبات", "مراقبة الجودة", "الصيانة التنبؤية"],
      desc: "مساعد الذكاء الاصطناعي لاستفسارات شبكة المياه والإبلاغ عن التسريبات."
    },
    electricity: {
      title: "إدارة الكهرباء", subtitle: "مراقبة استقرار الشبكة وتكامل الطاقة المتجددة.",
      stats: { load: "حمل الشبكة", renewable: "الطاقة المتجددة", stability: "درجة الاستقرار", loss: "معدل الفقد", voltage: "الجهد" },
      chartTitle: "توزيع الطاقة والفقد حسب المنطقة",
      features: ["توزيع الجهد", "استقرار الشبكة", "الطاقة المتجددة", "كشف الأعطال"],
      desc: "تحليل الشبكة الذكية ومساعد دعم الانقطاع."
    },
    construction: {
      title: "ذكاء الإنشاءات", subtitle: "المسح بالدرون وتقييم التربة.",
      stats: { projects: "المشاريع النشطة", zones: "المناطق الممسوحة", assessments: "التقييمات المكتملة", vr: "معاينات افتراضية" },
      label: { soil: "نوع التربة", buildable: "قابل للبناء", viewVr: "عرض المبنى بتقنية VR", progress: "التقدم", findings: "نتائج مسح الدرون" },
      status: { surveying: "جاري المسح", complete: "تم التقييم", planning: "تخطيط" },
      soil: { sandy: "طمي رملي", clay: "طين", rocky: "رمل صخري" },
      projects: {
        alNoor: { name: "منطقة النور", findings: ["تم اكتشاف بئرين تحت الأرض", "لا توجد تجاويف"] },
        greenValley: { name: "وادي الأخضر - المرحلة 2", findings: ["تجويف صغير على عمق 12 متر", "منسوب مياه جوفية مرتفع"] },
        desertBloom: { name: "مدينة زهرة الصحراء", findings: ["طبقة صخرية غير مستقرة", "تتطلب أساسات عميقة"] }
      },
      features: ["المسح بالدرون", "تقييم التربة", "كشف المخاطر", "الواقع الافتراضي"],
      desc: "دليل تخطيط المشاريع ولوائح السلامة."
    },
    aiChat: {
      title: "مركز ذكاء المدينة",
      subtitle: "مساعد البنية التحتية بالذكاء الاصطناعي",
      welcome: "مرحباً بك في **مركز ذكاء المدينة**! 👋\n\nيمكنني مساعدتك في استفسارات المياه والكهرباء والإنشاءات.",
      placeholder: "اسأل عن البنية التحتية...",
      thinking: "جاري التفكير...",
      button: "فتح مساعد الذكاء",
      presets: { water: "تسريب مياه", electricity: "حالة الشبكة", construction: "جاهزية الأرض" },
      questions: {
        water: "هناك تسرب مياه في حيي. هل يمكنك المساعدة؟",
        electricity: "ما هي حالة شبكة الكهرباء الحالية في المنطقة D؟",
        construction: "هل أرض منطقة النور جاهزة للبناء؟"
      },
      responses: {
        fallback: "أقوم بتحليل استفسارك. في النظام الكامل، سأتصل ببيانات البنية التحتية الحقيقية. جرب سؤالاً جاهزاً للعرض!",
        water: "🔍 **تحليل التسريب**\n\nتم اكتشاف خلل في الضغط في الحي 7، المنطقة B3. تم إرسال فريق الصيانة. الوقت المتوقع: 45 دقيقة.",
        electricity: "⚡ **حالة الشبكة**\n\nالحمل في المنطقة D بنسبة 88%. درجة الاستقرار 97.1. حصة الطاقة المتجددة 38%.",
        construction: "🏗️ **تقييم الأرض**\n\nمنطقة النور **مناسبة**. الصخور المستقرة على عمق 8 أمتار. تم تحديد الآبار لتجنبها."
      }
    },
    footer: { copy: "بناء مدن أذكى." }
  }
};
