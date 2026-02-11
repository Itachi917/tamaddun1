import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";

const NotFound = () => {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{t.common.notFound}</h2>
          <p className="text-muted-foreground">The page you are looking for doesn't exist.</p>
        </div>
        <Button asChild size="lg">
          <Link to="/">{t.sidebar.backHome}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
