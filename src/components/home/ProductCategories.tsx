import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Droplets } from "lucide-react";

const categories = [
  {
    title: "Huiles Moteur",
    subtitle: "Performance & Protection",
    description: "Formules synthétiques avancées pour une longévité maximale du moteur.",
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=1000",
    link: "/products#engine-oils",
    icon: <Zap className="w-5 h-5" />,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Transmission",
    subtitle: "Fluidité absolue",
    description: "Lubrifiants haute performance pour boîtes de vitesses.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000",
    link: "/products#transmission-oils",
    icon: <ShieldCheck className="w-5 h-5" />,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Refroidissement",
    subtitle: "Contrôle thermique",
    description: "Protection contre la corrosion et régulation optimale.",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=1000",
    link: "/products#coolants",
    icon: <Droplets className="w-5 h-5" />,
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-[#0a0a0a] relative overflow-hidden" ref={ref}>
      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="text-brand-gold font-bold text-[11px] uppercase tracking-[0.3em] block mb-4"
          >
            L'Excellence soma
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
          >
            Solutions de <br />
            <span className="text-white/40">Lubrification Premium</span>
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[700px]">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
              className={`${cat.gridClass} group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10`}
            >
              {/* Image with Zoom effect */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-red/20 backdrop-blur-md flex items-center justify-center text-brand-red border border-brand-red/30">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    {cat.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                  {cat.title}
                </h3>
                
                <p className="text-white/60 text-sm md:text-base max-w-sm mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  {cat.description}
                </p>

                <Link
                  to={cat.link}
                  className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/link"
                >
                  Découvrir
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-brand-red" />
                </Link>
              </div>

              {/* Glassmorphism Border Highlight */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px]" />
    </section>
  );
};

export default ProductCategories;
