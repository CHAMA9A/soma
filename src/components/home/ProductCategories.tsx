import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import productEngineOil from "@/assets/product-engine-oil.jpg";
import productTransmissionOil from "@/assets/product-transmission-oil.jpg";
import productCoolants from "@/assets/product-coolants.jpg";

const categories = [
  {
    title: "Engine Oils",
    description: "Premium synthetic and mineral engine oils for gasoline and diesel engines. Maximum protection and performance.",
    image: productEngineOil,
    link: "/products#engine-oils",
  },
  {
    title: "Transmission Oils",
    description: "High-quality gearbox and transmission fluids ensuring smooth operation and extended component life.",
    image: productTransmissionOil,
    link: "/products#transmission-oils",
  },
  {
    title: "Coolants & Additives",
    description: "Advanced coolants and performance additives for optimal engine temperature and system efficiency.",
    image: productCoolants,
    link: "/products#coolants",
  },
];

const ProductCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
            Our Products
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Premium Lubricant Ranges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of automotive lubricants, engineered for 
            professional performance and reliability.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={category.link}
                className="group block relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
