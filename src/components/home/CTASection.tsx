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
    <section className="section-padding relative overflow-hidden bg-[#0a0a0a]" ref={ref}>
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center py-20 px-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-brand-gold font-bold text-[11px] uppercase tracking-[0.4em] block mb-6"
          >
            Prêt à passer au niveau supérieur ?
          </motion.span>
          
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
            Optimisons Ensemble <br />
            <span className="text-white/40">Vos Performances.</span>
          </h2>
          
          <p className="text-lg text-white/50 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
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
