import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Package, Calendar } from "lucide-react";

const figures = [
  {
    icon: Calendar,
    value: "25+",
    label: "Years of Experience",
    description: "Industry expertise since 1998",
  },
  {
    icon: Users,
    value: "500+",
    label: "Professional Partners",
    description: "Trusted by garages across the region",
  },
  {
    icon: Package,
    value: "150+",
    label: "Product Ranges",
    description: "Complete lubrication solutions",
  },
  {
    icon: Award,
    value: "ISO",
    label: "Certified Quality",
    description: "International quality standards",
  },
];

const KeyFigures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 md:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <figure.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
                {figure.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-foreground mb-1">
                {figure.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {figure.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
