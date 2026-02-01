import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative overflow-hidden bg-background" ref={ref}>
      {/* Background Enhancement */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 0.1 } : { scale: 1.1, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center py-20 px-8 rounded-[3rem] bg-secondary/50 border border-border backdrop-blur-sm"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-brand-gold font-bold text-[11px] uppercase tracking-[0.4em] block mb-6"
          >
            Prêt à passer au niveau supérieur ?
          </motion.span>
          
          <h2 className="font-heading text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-8 leading-[1.1]">
            Optimisons Ensemble <br />
            <span className="text-foreground/40">Vos Performances.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Que vous soyez propriétaire de garage, gestionnaire de flotte ou distributeur, 
            nous avons les solutions de lubrification adaptées à vos exigences les plus strictes.
          </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button variant="gold" size="xl" asChild className="rounded-full px-12 group h-14">
                <Link to="/contact" className="flex items-center gap-3">
                  <span className="text-base">Demande de Devis</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
