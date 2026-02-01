import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Package, Calendar } from "lucide-react";

const figures = [
  {
    icon: Calendar,
    value: "25+",
    label: "Années d'Expérience",
    description: "Expertise depuis 1998",
  },
  {
    icon: Users,
    value: "500+",
    label: "Partenaires Pro",
    description: "Réseau de garages agréés",
  },
  {
    icon: Package,
    value: "150+",
      label: "Gammes de Services",
    description: "Solutions complètes",
  },
  {
    icon: Award,
    value: "ISO",
    label: "Qualité Certifiée",
    description: "Standards internationaux",
  },
];

const KeyFigures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-all duration-500 group overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-red/10 transition-colors duration-500">
                <figure.icon className="w-5 h-5 text-white/40 group-hover:text-brand-red transition-colors duration-500" />
              </div>

              <div className="font-heading text-5xl md:text-6xl font-black text-white tracking-tighter mb-2">
                {figure.value}
              </div>
              
              <div className="text-[11px] font-bold text-brand-gold uppercase tracking-[0.2em] mb-2">
                {figure.label}
              </div>
              
              <div className="text-sm text-white/40 font-light tracking-tight">
                {figure.description}
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-brand-red group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
