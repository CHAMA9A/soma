import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Truck, Wrench } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Gestion de Flotte",
    description: "Solutions de lubrification complètes pour une flotte nationale de plus de 200 véhicules.",
    tag: "Partenariat",
  },
  {
    icon: Wrench,
    title: "Réseau d'Ateliers",
    description: "Support technique et approvisionnement pour 50+ ateliers certifiés.",
    tag: "Expertise",
  },
  {
    icon: Truck,
    title: "Expansion Distribution",
    description: "Développement du réseau de distribution stratégique à travers de nouvelles régions.",
    tag: "2024",
  },
];

const ProjectsHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      {/* Background Enhancement */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ x: isInView ? 0 : -50 }}
          animate={isInView ? { x: 0, opacity: 0.1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486006396143-542cfc4aefd2?q=80&w=2000"
                alt="Automotive expertise"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-brand-red p-8 rounded-3xl shadow-[0_20px_50px_rgba(228,34,26,0.3)]"
            >
              <div className="font-heading text-4xl font-black text-white tracking-tighter leading-none">50+</div>
              <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest mt-2">Projets Actifs</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-brand-gold font-bold text-[11px] uppercase tracking-[0.3em] block mb-4">
              Partenariats & Impact
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
              Propulser Votre <br />
              <span className="text-white/40">Succès Technique</span>
            </h2>
            
            <p className="text-white/50 mb-10 text-lg font-light leading-relaxed max-w-lg">
              Nous accompagnons les garages, flottes et distributeurs avec des solutions sur mesure pour optimiser chaque performance.
            </p>

            {/* Project Cards */}
            <div className="space-y-4 mb-10">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-red/10 transition-colors">
                    <project.icon className="w-5 h-5 text-white/40 group-hover:text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-white tracking-tight">{project.title}</h4>
                      <span className="px-2 py-0.5 bg-brand-gold/10 text-brand-gold text-[9px] font-bold uppercase tracking-widest rounded border border-brand-gold/20">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-sm text-white/40 font-light">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="xl" asChild className="rounded-full px-10 group">
              <Link to="/projects" className="flex items-center gap-3">
                <span>Tous les Projets</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
