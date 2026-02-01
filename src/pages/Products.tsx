import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Download, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const productEngineOil = "https://images.unsplash.com/photo-1635810230588-403d1547432d?auto=format&fit=crop&q=80&w=800";
const productTransmissionOil = "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800";
const productCoolants = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800";

const serviceCategories = [
  {
    id: "engine-oils",
    title: "Huiles Moteur",
    description: "Huiles moteur premium pour moteurs essence et diesel, répondant aux dernières spécifications API, ACEA et OEM.",
    image: productEngineOil,
    services: [
      {
        name: "SOMA Synth 5W-30",
        specs: "API SN Plus, ACEA C3",
        viscosity: "5W-30",
        type: "100% Synthèse",
      },
      {
        name: "SOMA Synth 5W-40",
        specs: "API SP, ACEA A3/B4",
        viscosity: "5W-40",
        type: "100% Synthèse",
      },
      {
        name: "SOMA Performance 10W-40",
        specs: "API SL, ACEA A3/B3",
        viscosity: "10W-40",
        type: "Semi-Synthétique",
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
    title: "Huiles de Transmission & Boîte",
    description: "Fluides de haute qualité pour transmissions automatiques, manuelles et CVT.",
    image: productTransmissionOil,
    services: [
      {
        name: "SOMA ATF Multi",
        specs: "Dexron VI, Mercon LV",
        viscosity: "ATF",
        type: "Multi-Véhicules",
      },
      {
        name: "SOMA Gear GL-5 75W-90",
        specs: "API GL-5, MT-1",
        viscosity: "75W-90",
        type: "Synthèse Boîte",
      },
      {
        name: "SOMA CVT Fluid",
        specs: "NS-2, CVTF+4",
        viscosity: "CVT",
        type: "Spécifique CVT",
      },
      {
        name: "SOMA PSF Universal",
        specs: "CHF 11S Compatible",
        viscosity: "PSF",
        type: "Direction Assistée",
      },
    ],
  },
  {
    id: "coolants",
    title: "Liquides de Refroidissement & Additifs",
    description: "Liquides de refroidissement et additifs de performance pour une santé moteur optimale.",
    image: productCoolants,
    services: [
      {
        name: "SOMA Coolant G12+",
        specs: "VW TL 774-D/F",
        viscosity: "Prêt à l'emploi",
        type: "Liquide OAT",
      },
      {
        name: "SOMA Antifreeze Concentrate",
        specs: "ASTM D3306",
        viscosity: "Concentré",
        type: "Universel",
      },
      {
        name: "SOMA Fuel System Cleaner",
        specs: "Compatible Injection Directe",
        viscosity: "250ml",
        type: "Additif",
      },
      {
        name: "SOMA Engine Flush",
        specs: "Avant Vidange",
        viscosity: "350ml",
        type: "Traitement",
      },
    ],
  },
];

const Products = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-black relative overflow-hidden">
        {/* Background Enhancement */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599423300746-b62533397364?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red text-sm font-bold uppercase tracking-widest rounded-full mb-4 border border-brand-red/20">
              Gamme de Produits Premium
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
              Performance <br />
              <span className="text-brand-gold">Sans Compromis</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Découvrez notre catalogue complet de lubrifiants et fluides techniques, 
              formulés pour répondre aux exigences les plus strictes des constructeurs mondiaux.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
          <section
            key={category.id}
            id={category.id}
            className={`section-padding relative overflow-hidden ${catIndex % 2 === 0 ? "bg-black" : "bg-[#0a0a0a]"}`}
          >
            {/* Background Enhancement */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 mix-blend-overlay" />
              {catIndex % 2 === 0 ? (
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(196,30,58,0.02),transparent_60%)]" />
              ) : (
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(184,134,11,0.02),transparent_60%)]" />
              )}
            </div>

            <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-12 items-start mb-20"
            >
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-lg text-white/40 font-light leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="relative rounded-3xl overflow-hidden border border-white/5">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {category.services.map((service, srvIndex) => (
                <motion.div
                  key={srvIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: srvIndex * 0.1 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 bg-brand-red/10 text-brand-red text-[10px] font-bold uppercase tracking-wider rounded-full border border-brand-red/20">
                      {service.type}
                    </span>
                    <span className="text-xs text-white/30 font-mono font-bold">
                      {service.viscosity}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/40 font-light mb-8">
                    {service.specs}
                  </p>
                  <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm" className="flex-1 text-xs text-white/60 hover:text-white hover:bg-white/5 border border-white/5 rounded-full h-10">
                      <Info className="w-3.5 h-3.5 mr-2" />
                      Détails
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 text-xs border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-black rounded-full h-10 transition-all">
                      <Download className="w-3.5 h-3.5 mr-2" />
                      Fiche
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
