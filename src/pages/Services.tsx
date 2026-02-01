import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Download, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceImage1 = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800";
const serviceImage2 = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800";
const serviceImage3 = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800";

const serviceCategories = [
  {
    id: "technical-expertise",
    title: "Expertise Technique",
    description: "Conseils spécialisés pour l'optimisation de vos flottes et de vos équipements industriels.",
    image: serviceImage1,
    services: [
      {
        name: "Analyse de Fluides",
        description: "Diagnostic complet de l'état de vos lubrifiants pour prévenir les pannes.",
        features: ["Rapports détaillés", "Préconisations", "Suivi historique"],
      },
      {
        name: "Audit Lubrification",
        description: "Optimisation de votre plan de graissage et réduction des références.",
        features: ["Économies d'énergie", "Durabilité accrue", "Conformité"],
      },
      {
        name: "Formation Technique",
        description: "Programmes de formation pour vos équipes sur les nouvelles technologies.",
        features: ["Session sur site", "Certification", "Supports experts"],
      },
      {
        name: "Support OEM",
        description: "Accompagnement pour le respect des garanties constructeurs.",
        features: ["Expertise marques", "Vérification specs", "Documentation"],
      },
    ],
  },
  {
    id: "industrial-solutions",
    title: "Solutions Industrielles",
    description: "Services sur mesure pour les secteurs de l'industrie lourde et de la manufacture.",
    image: serviceImage2,
    services: [
      {
        name: "Maintenance Prédictive",
        description: "Solutions connectées pour surveiller l'usure de vos machines en temps réel.",
        features: ["Capteurs IoT", "Alertes mobiles", "Analyse IA"],
      },
      {
        name: "Gestion des Déchets",
        description: "Collecte et valorisation de vos huiles usagées en conformité avec les normes.",
        features: ["Traçabilité", "Certificats verts", "Logistique dédiée"],
      },
      {
        name: "Stockage & Distribution",
        description: "Installation de systèmes de stockage intelligents et distribution automatisée.",
        features: ["Cuves connectées", "Inventaire auto", "Sécurité"],
      },
      {
        name: "Filtration Mobile",
        description: "Nettoyage de vos circuits d'huile sur site sans arrêt de production.",
        features: ["Rapidité", "Pureté ISO", "Performance"],
      },
    ],
  },
];

const Services = () => {
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
              Nos Services Experts
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
              Solutions de <br />
              <span className="text-brand-gold">Performance</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Au-delà de la fourniture de lubrifiants, SOMA vous accompagne avec une gamme de services 
              techniques et logistiques pour maximiser votre efficacité opérationnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${catIndex % 2 === 0 ? "bg-black" : "bg-[#0a0a0a]"}`}
        >
          <div className="container-wide">
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
                  className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group flex flex-col h-full"
                >
                  <h3 className="font-heading text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/40 font-light mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                        <span className="text-[11px] text-white/60 font-medium uppercase tracking-wider">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 mt-auto">
                    <Button variant="outline" size="sm" className="w-full text-xs border-brand-gold/20 text-brand-gold hover:bg-brand-gold hover:text-black rounded-full h-10 transition-all">
                      <Info className="w-3.5 h-3.5 mr-2" />
                      En savoir plus
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-brand-red">
        <div className="container-wide text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            Besoin d'une expertise sur mesure ?
          </h2>
          <Button variant="secondary" size="lg" className="rounded-full bg-white text-brand-red hover:bg-black hover:text-white transition-all px-12 h-14 font-bold text-lg">
            Demander un audit gratuit
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
