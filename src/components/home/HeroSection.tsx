import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background & Spotlight Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/10 rounded-full blur-[120px] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] opacity-30" />
        
        {/* Fine grid pattern for industrial feel */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />
      </div>

      {/* Content Container */}
      <div className="container-wide relative z-10 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="px-5 py-2 border border-brand-gold/30 rounded-full text-[11px] font-bold text-brand-gold uppercase tracking-[0.3em] bg-brand-gold/5 backdrop-blur-sm">
              Innovation & Performance
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8"
          >
            SOMA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              LUBRIFIANTS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/50 max-w-2xl font-light tracking-tight leading-relaxed mb-12"
          >
            L'excellence technologique au service de la performance automobile. 
            Découvrez nos solutions de lubrification premium pour une protection absolue.
          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-6 items-center"
            >
              <Button variant="gold" size="xl" asChild className="px-10 rounded-full group">
                <Link to="/contact" className="flex items-center gap-3">
                  <span className="text-base font-bold">Demande de Devis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
                <Button variant="ghost" size="xl" asChild className="text-white hover:bg-white/5 rounded-full border border-white/10 px-10">
                  <Link to="/services" className="flex items-center gap-3">
                    <span>Explorer les Services</span>
                  </Link>
                </Button>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-brand-gold" />
        </motion.div>
      </motion.div>

      {/* Ambient Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
    </section>
  );
};

export default HeroSection;
