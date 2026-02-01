import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
const productEngineOil = "https://images.unsplash.com/photo-1635810230588-403d1547432d?auto=format&fit=crop&q=80&w=800";
const productTransmissionOil = "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800";
const productCoolants = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800";
const workshopImage = "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200";
const heroImage = "https://images.unsplash.com/photo-1486006396193-471a2abc881e?auto=format&fit=crop&q=80&w=2000";

const galleryItems = [
  {
    image: heroImage,
    title: "Premium Engine Oil",
    category: "Products",
  },
  {
    image: workshopImage,
    title: "Partner Workshop",
    category: "Facilities",
  },
  {
    image: productEngineOil,
    title: "Engine Oil Range",
    category: "Products",
  },
  {
    image: productTransmissionOil,
    title: "Transmission Fluids",
    category: "Products",
  },
  {
    image: productCoolants,
    title: "Coolants & Additives",
    category: "Products",
  },
  {
    image: workshopImage,
    title: "Technical Training",
    category: "Events",
  },
];

const categories = ["All", "Products", "Facilities", "Events"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              Gallery
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our{" "}
              <span className="text-primary">World</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our products, facilities, workshops, and events through 
              our visual gallery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
