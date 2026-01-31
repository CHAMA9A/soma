import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import productEngineOil from "@/assets/product-engine-oil.jpg";
import productTransmissionOil from "@/assets/product-transmission-oil.jpg";
import productCoolants from "@/assets/product-coolants.jpg";

const productCategories = [
  {
    id: "engine-oils",
    title: "Engine Oils",
    description: "Premium engine oils for gasoline and diesel engines, meeting the latest API, ACEA, and OEM specifications.",
    image: productEngineOil,
    products: [
      {
        name: "SOMA Synth 5W-30",
        specs: "API SN Plus, ACEA C3",
        viscosity: "5W-30",
        type: "Full Synthetic",
      },
      {
        name: "SOMA Synth 5W-40",
        specs: "API SP, ACEA A3/B4",
        viscosity: "5W-40",
        type: "Full Synthetic",
      },
      {
        name: "SOMA Performance 10W-40",
        specs: "API SL, ACEA A3/B3",
        viscosity: "10W-40",
        type: "Semi-Synthetic",
      },
      {
        name: "SOMA Diesel HD 15W-40",
        specs: "API CK-4, ACEA E9",
        viscosity: "15W-40",
        type: "Heavy Duty",
      },
    ],
  },
  {
    id: "transmission-oils",
    title: "Transmission & Gearbox Oils",
    description: "High-quality transmission fluids for automatic, manual, and CVT transmissions.",
    image: productTransmissionOil,
    products: [
      {
        name: "SOMA ATF Multi",
        specs: "Dexron VI, Mercon LV",
        viscosity: "ATF",
        type: "Multi-Vehicle",
      },
      {
        name: "SOMA Gear GL-5 75W-90",
        specs: "API GL-5, MT-1",
        viscosity: "75W-90",
        type: "Synthetic Gear",
      },
      {
        name: "SOMA CVT Fluid",
        specs: "NS-2, CVTF+4",
        viscosity: "CVT",
        type: "CVT Specific",
      },
      {
        name: "SOMA PSF Universal",
        specs: "CHF 11S Compatible",
        viscosity: "PSF",
        type: "Power Steering",
      },
    ],
  },
  {
    id: "coolants",
    title: "Coolants & Additives",
    description: "Engine coolants and performance additives for optimal engine health and efficiency.",
    image: productCoolants,
    products: [
      {
        name: "SOMA Coolant G12+",
        specs: "VW TL 774-D/F",
        viscosity: "Ready Mix",
        type: "OAT Coolant",
      },
      {
        name: "SOMA Antifreeze Concentrate",
        specs: "ASTM D3306",
        viscosity: "Concentrate",
        type: "Universal",
      },
      {
        name: "SOMA Fuel System Cleaner",
        specs: "Direct Injection Safe",
        viscosity: "250ml",
        type: "Additive",
      },
      {
        name: "SOMA Engine Flush",
        specs: "Pre-Oil Change",
        viscosity: "350ml",
        type: "Treatment",
      },
    ],
  },
];

const Products = () => {
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
              Product Ranges
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Premium{" "}
              <span className="text-primary">Lubricants</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of automotive lubricants, designed for 
              professional performance and meeting the latest industry specifications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      {productCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${catIndex % 2 === 0 ? "" : "bg-card"}`}
        >
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start mb-12"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {category.description}
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </motion.div>

            {/* Product Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product, prodIndex) => (
                <motion.div
                  key={prodIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: prodIndex * 0.1 }}
                  className="p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {product.type}
                    </span>
                    <span className="text-sm text-muted-foreground font-mono">
                      {product.viscosity}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.specs}
                  </p>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="flex-1">
                      <Info className="w-4 h-4 mr-1" />
                      Details
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      TDS
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Products;
