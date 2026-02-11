import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function LanguageToggle() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="font-bold"
    >
      {lang === "en" ? "العربية" : "English"}
    </Button>
  );
}
