import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, Truck, Wrench, Users, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const workshopImage = "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200";

const projects = [
  {
    icon: Truck,
    title: "Partenariat Flotte Nationale",
    description: "Gestion complète de la lubrification pour une entreprise de logistique de plus de 250 véhicules. Livraison programmée et optimisation des coûts.",
    status: "En cours",
    location: "France entière",
    year: "2023-Présent",
    metrics: ["250+ Véhicules", "12 Dépôts", "-30% Coûts"],
  },
  {
    icon: Building2,
    title: "Réseau d'Ateliers Premium",
    description: "Accord de fourniture exclusive avec un réseau de 75 ateliers indépendants, incluant produits premium et formation technique.",
    status: "Actif",
    location: "Régional",
    year: "2022-Présent",
    metrics: ["75 Ateliers", "150+ Techniciens", "Partenaire Or"],
  },
  {
    icon: Wrench,
    title: "Centres de Service OEM",
    description: "Fournisseur officiel pour les centres de service agréés, répondant aux spécifications OEM les plus strictes.",
    status: "Actif",
    location: "Multi-villes",
    year: "2021-Présent",
    metrics: ["15 Centres", "Certifié OEM", "Grade Premium"],
  },
  {
    icon: Users,
    title: "Programme Flotte Taxis",
    description: "Programme de lubrification sur mesure pour flottes de taxis urbains, optimisant les cycles de maintenance.",
    status: "En cours",
    location: "Métropole",
    year: "2024",
    metrics: ["180 Taxis", "Intervalles Prolongés", "Support 24/7"],
  },
];

const partnerships = [
  {
    type: "Garages",
    count: "200+",
    description: "Ateliers indépendants et centres de réparation",
  },
  {
    type: "Flottes",
    count: "50+",
    description: "Opérateurs logistiques et commerciaux",
  },
  {
    type: "Distributeurs",
    count: "25+",
    description: "Partenaires de distribution régionale",
  },
  {
    type: "Centres OEM",
    count: "15+",
    description: "Centres de service après-vente agréés",
  },
];

const Projects = () => {
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
              Réalisations & Partenariats
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
              Nos Success <br />
              <span className="text-brand-gold">Stories</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Découvrez comment nous accompagnons les professionnels de l'automobile avec 
              des solutions de lubrification sur mesure qui boostent leur performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/5 text-center group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="font-heading text-4xl md:text-6xl font-black text-brand-red mb-4 group-hover:scale-110 transition-transform duration-500">
                  {partner.count}
                </div>
                <div className="font-bold text-white mb-2 uppercase tracking-widest text-xs">{partner.type}</div>
                <div className="text-sm text-white/40 font-light">{partner.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Projets Phares
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto font-light">
              Des partenariats concrets délivrant des résultats tangibles pour nos clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <project.icon className="w-8 h-8 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-heading text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-wider rounded-full border border-brand-gold/20">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-white/40 font-light leading-relaxed mb-8">{project.description}</p>

                <div className="flex items-center gap-6 text-sm text-white/30 mb-8 font-medium italic">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-red" />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.metrics.map((metric, mIndex) => (
                    <span
                      key={mIndex}
                      className="px-4 py-2 bg-white/5 text-brand-gold text-xs font-bold rounded-xl border border-white/5"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Image */}
      <section className="section-padding bg-[#050505]">
        <div className="container-wide">
          <div className="relative rounded-[40px] overflow-hidden border border-white/5 group">
            <img
              src={workshopImage}
              alt="Atelier Professionnel"
              className="w-full h-[500px] object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent flex items-center">
              <div className="p-12 md:p-20 max-w-2xl">
                <h2 className="font-heading text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                  Devenez <br />
                  <span className="text-brand-gold">Partenaire</span>
                </h2>
                <p className="text-lg text-white/50 mb-10 font-light leading-relaxed">
                  Rejoignez notre réseau croissant de professionnels de l'automobile. 
                  Discutons ensemble de vos besoins spécifiques en lubrification.
                </p>
                <Button variant="gold" size="xl" asChild className="px-12 rounded-full">
                  <Link to="/contact">Démarrer un Partenariat</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
