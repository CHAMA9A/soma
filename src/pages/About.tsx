import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, CheckCircle } from "lucide-react";
const workshopImage = "https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80&w=1200";

const values = [
  {
    icon: Shield,
    title: "Qualité Supérieure",
    description: "Chaque produit répond aux normes internationales les plus strictes, garantissant une performance optimale et une protection moteur absolue.",
  },
  {
    icon: Target,
    title: "Service Professionnel",
    description: "Nous bâtissons des partenariats durables en comprenant et en dépassant les besoins uniques des professionnels de l'automobile.",
  },
  {
    icon: Award,
    title: "Innovation Continue",
    description: "Nous faisons progresser continuellement nos formulations pour répondre aux évolutions technologiques et environnementales.",
  },
];

const commitments = [
  "Gestion de la qualité certifiée ISO 9001",
  "Produits approuvés API et ACEA",
  "Formulations respectueuses de l'environnement",
  "Support technique et programmes de formation",
  "Chaîne d'approvisionnement et livraison fiables",
  "Tarification compétitive pour les professionnels",
];

const About = () => {
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
              À Propos de Nous
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
              25 Ans d'Excellence <br />
              <span className="text-brand-gold">Automobile</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Soma Lubrifiants est un nom de confiance dans la lubrification automobile depuis 1998. 
              Notre engagement envers la qualité et l'innovation a fait de nous le partenaire privilégié 
              des ateliers, garages et gestionnaires de flottes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding bg-[#0a0a0a]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-white/40 font-light leading-relaxed">
                <p>
                  Fondée en 1998, Soma Lubrifiants a débuté comme une petite entreprise de distribution 
                  avec la vision de fournir des lubrifiants automobiles haut de gamme aux ateliers 
                  professionnels de notre région.
                </p>
                <p>
                  Au cours des 25 dernières années, nous sommes devenus un fournisseur leader de 
                  solutions de lubrification complètes, servant des centaines de garages, 
                  d'opérateurs de flottes et de distributeurs.
                </p>
                <p>
                  Notre croissance repose sur une base de produits de qualité, une expertise technique 
                  et un engagement inébranlable envers le succès de nos partenaires. Aujourd'hui, 
                  nous proposons plus de 150 gammes de produits couvrant tous les besoins.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/5">
                <img
                  src={workshopImage}
                  alt="Atelier Automobile"
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-brand-red text-white px-8 py-6 rounded-2xl shadow-2xl border border-white/10">
                <div className="font-heading text-4xl font-black">Depuis</div>
                <div className="text-xl font-bold text-white/80">1998</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Vision & Valeurs
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto font-light">
              Nous nous efforçons d'être le partenaire le plus fiable en lubrification automobile, 
              offrant l'excellence dans chaque produit et service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding bg-[#050505]">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-brand-gold" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-black text-white tracking-tight">
                  Notre Engagement Qualité
                </h2>
              </div>
              <p className="text-lg text-white/50 mb-10 font-light leading-relaxed">
                Chez Soma Lubrifiants, la qualité n'est pas seulement une norme, c'est notre promesse. 
                Nous nous engageons à fournir des produits qui dépassent les attentes de l'industrie.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {commitments.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                    <span className="text-sm text-white/60 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { label: "ISO", sub: "Certifié 9001", bg: "bg-brand-red", text: "text-white" },
                { label: "API", sub: "Approuvé", bg: "bg-white/5", text: "text-white" },
                { label: "ACEA", sub: "Conforme", bg: "bg-white/5", text: "text-white" },
                { label: "OEM", sub: "Spécifications", bg: "bg-brand-gold", text: "text-black" },
              ].map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl ${item.bg} ${item.text} border border-white/10 shadow-xl`}>
                  <div className="font-heading text-4xl font-black mb-2">{item.label}</div>
                  <div className="text-sm font-bold opacity-80 uppercase tracking-widest">{item.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
