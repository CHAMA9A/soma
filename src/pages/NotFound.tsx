import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="font-heading text-8xl md:text-9xl font-black text-brand-red mb-4 tracking-tighter shadow-brand-red/20 drop-shadow-2xl">
          404
        </h1>
        <h2 className="font-heading text-2xl md:text-4xl font-black text-white mb-4 tracking-tight">
          Page Introuvable
        </h2>
        <p className="text-white/40 mb-10 max-w-md mx-auto font-light leading-relaxed">
          La page que vous recherchez n'existe pas ou a été déplacée. 
          Repartons sur de bonnes bases.
        </p>
        <Button variant="gold" size="xl" asChild className="rounded-full px-10">
          <Link to="/" className="flex items-center gap-3">
            <Home className="w-5 h-5" />
            <span className="font-bold">Retour à l'Accueil</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
