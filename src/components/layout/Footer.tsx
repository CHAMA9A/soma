import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex items-center justify-center">
                <img 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/ae5ea830-5c58-4a69-8ebb-f52d6b9b742b/Asset-2-2x-1769964414137.png?width=80&height=80&resize=contain" 
                  alt="SOMA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-xl font-black text-white tracking-tighter leading-none">
                  SOMA
                </span>
                <span className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em] mt-1">
                  Lubrifiants
                </span>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed font-light">
              L'excellence en lubrification automobile. Solutions premium pour professionnels, 
              portées par une innovation constante depuis plus de 25 ans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white tracking-tight mb-6">Navigation</h4>
            <ul className="space-y-3">
                {[
                  { name: "À Propos", path: "/about" },
                  { name: "Nos Services", path: "/services" },
                  { name: "Activités", path: "/activities" },
                  { name: "Réalisations", path: "/projects" },
                ].map((link) => (

                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/40 hover:text-brand-gold transition-colors duration-200 font-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-white tracking-tight mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-white/40 font-light">
                  <MapPin className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                  <span>Zone Industrielle, Secteur Automobile, 75000 Paris, France</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/40 font-light">
                  <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                  <a href="mailto:contact@soma-lubrifiants.com" className="hover:text-brand-gold transition-colors">
                    contact@soma-lubrifiants.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/20 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} Soma Lubrifiants. Tous droits réservés.
          </p>
          <div className="flex items-center gap-8">
            <Link
              to="/legal"
              className="text-xs text-white/20 hover:text-white transition-colors uppercase tracking-widest font-medium"
            >
              Mentions Légales
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-white/20 hover:text-white transition-colors uppercase tracking-widest font-medium"
            >
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
