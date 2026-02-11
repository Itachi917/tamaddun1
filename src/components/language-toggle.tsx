import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { lang, setLanguage } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm"
      onClick={() => setLanguage(lang === "en" ? "ar" : "en")}
      className="font-bold text-primary"
    >
      {lang === "en" ? "العربية" : "English"}
    </Button>
  );
}
