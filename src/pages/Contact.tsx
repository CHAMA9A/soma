import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(100, "Le nom doit faire moins de 100 caractères"),
  email: z.string().trim().email("Adresse email invalide").max(255, "L'email doit faire moins de 255 caractères"),
  subject: z.string().trim().max(100, "Le sujet doit faire moins de 100 caractères").optional(),
  message: z.string().trim().min(1, "Le message est requis").max(1000, "Le message doit faire moins de 1000 caractères"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@soma-lubrifiants.com",
    href: "mailto:contact@soma-lubrifiants.com",
  },
  {
    icon: MapPin,
    title: "Localisation",
    content: "Zone Industrielle, Secteur Automobile, 75000 Paris, France",
    href: "#map",
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "Lun - Ven: 8:00 - 18:00",
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      contactSchema.parse(formData);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Envoyé !",
        description: "Merci de nous avoir contactés. Nous vous répondrons très prochainement.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contactez-nous
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter">
              Parlons de vos <br />
              <span className="text-brand-gold">Projets</span>
            </h1>
            <p className="text-lg text-white/50 font-light leading-relaxed">
              Vous avez des questions sur nos produits ou vous souhaitez devenir partenaire ? 
              Notre équipe d'experts est à votre écoute pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-[#0a0a0a] border-b border-white/5">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group"
              >
                {info.href ? (
                  <a href={info.href} className="block">
                    <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <info.icon className="w-8 h-8 text-brand-red" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-white/40 font-light">{info.content}</p>
                  </a>
                ) : (
                  <div>
                    <div className="w-16 h-16 rounded-2xl bg-brand-red/10 flex items-center justify-center mb-8">
                      <info.icon className="w-8 h-8 text-brand-red" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-white/40 font-light">{info.content}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
                Envoyez un Message
              </h2>
              <p className="text-lg text-white/40 mb-12 font-light">
                Remplissez le formulaire ci-dessous et nous vous répondrons sous 24h.
              </p>
  
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-white/60 uppercase tracking-widest ml-4">
                      Nom Complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className={`h-14 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-brand-red/50 transition-all ${errors.name ? "border-brand-red" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-brand-red font-bold mt-2 ml-4">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-white/60 uppercase tracking-widest ml-4">
                      Adresse Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.com"
                      className={`h-14 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-brand-red/50 transition-all ${errors.email ? "border-brand-red" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-brand-red font-bold mt-2 ml-4">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-bold text-white/60 uppercase tracking-widest ml-4">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Demande de devis / Information produit"
                    className="h-14 rounded-2xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-brand-red/50 transition-all"
                  />
                </div>
  
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-white/60 uppercase tracking-widest ml-4">
                    Votre Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Comment pouvons-nous vous aider ?"
                    rows={6}
                    className={`rounded-3xl bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-brand-red/50 transition-all min-h-[150px] ${errors.message ? "border-brand-red" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-xs text-brand-red font-bold mt-2 ml-4">{errors.message}</p>
                  )}
                </div>
  
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full px-12 rounded-full font-bold text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Envoyer le Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
  
            {/* Call Action + Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="p-12 rounded-[40px] bg-brand-red text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
                <div className="relative z-10">
                  <Mail className="w-16 h-16 mb-8 text-white/40" />
                  <h3 className="font-heading text-4xl font-black mb-4 tracking-tighter">
                    Expertise Directe
                  </h3>
                  <p className="text-lg text-white/80 mb-10 font-medium">
                    Envoyez-nous un email pour une réponse personnalisée sous 24h.
                  </p>
                  <Button
                    variant="premium"
                    size="xl"
                    className="bg-white text-brand-red hover:bg-white/90 px-10 shadow-xl"
                    asChild
                  >
                    <a href="mailto:contact@soma-lubrifiants.com" className="flex items-center gap-3">
                      <Send className="w-5 h-5" />
                      Nous Contacter
                    </a>
                  </Button>
                </div>
              </div>
  
              {/* Map Placeholder */}
              <div id="map" className="rounded-[40px] overflow-hidden border border-white/5 h-96 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1634567890123!5m2!1sen!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Soma Lubrifiants Location"
                  className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[40px]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
