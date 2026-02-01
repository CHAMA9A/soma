import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Droplets, Cog, Beaker, HeadphonesIcon } from "lucide-react";
const productEngineOil = "https://images.unsplash.com/photo-1635810230588-403d1547432d?auto=format&fit=crop&q=80&w=800";
const productTransmissionOil = "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800";
const productCoolants = "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800";
const workshopImage = "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200";

const activities = [
  {
    icon: Droplets,
    title: "Lubrifiants Automobiles",
    description: "Gamme complète de lubrifiants conçus pour les véhicules modernes, comprenant des huiles synthétiques, semi-synthétiques et minérales répondant aux dernières normes du secteur.",
    image: productEngineOil,
    features: ["Formulations 100% synthèse", "Intervalles de vidange prolongés", "Protection moteur maximale"],
  },
  {
    icon: Cog,
    title: "Huiles de Transmission",
    description: "Fluides spécialisés pour transmissions manuelles et automatiques, différentiels et systèmes de direction assistée assurant un fonctionnement fluide et une durée de vie prolongée des composants.",
    image: productTransmissionOil,
    features: ["Fluides ATF", "Huiles de boîte manuelle", "Compatible CVT"],
  },
  {
    icon: Beaker,
    title: "Liquides & Additifs",
    description: "Solutions de refroidissement avancées et additifs de performance pour maintenir une température moteur optimale et protéger contre la corrosion.",
    image: productCoolants,
    features: ["Liquides longue durée", "Nettoyants système d'injection", "Traitements moteur"],
  },
  {
    icon: HeadphonesIcon,
    title: "Support Technique",
    description: "Services de conseil expert pour vous aider à sélectionner les bons produits pour vos applications spécifiques, ainsi que des programmes de formation pour votre personnel.",
    image: workshopImage,
    features: ["Préconisations produits", "Formation technique", "Assistance sur site"],
  },
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-brand-red/10 text-brand-red text-sm font-bold uppercase tracking-widest rounded-full mb-4 border border-brand-red/20">
              Nos Activités
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
              Solutions de <br />
              <span className="text-brand-gold">Lubrification</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Des huiles moteur au conseil technique, nous fournissons des solutions 
              complètes de lubrification adaptées aux professionnels de l'automobile.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities List */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-wide space-y-32">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl overflow-hidden border border-white/5">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Icon Badge */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-red rounded-2xl flex items-center justify-center shadow-2xl border border-white/10 group hover:scale-110 transition-transform duration-500">
                  <activity.icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                  {activity.title}
                </h2>
                <p className="text-lg text-white/40 font-light leading-relaxed mb-10">
                  {activity.description}
                </p>
                <div className="grid sm:grid-cols-1 gap-4">
                  {activity.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_10px_rgba(228,34,26,0.5)]" />
                      <span className="text-white/80 font-semibold tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
