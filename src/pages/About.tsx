import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award, CheckCircle } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "Every product meets rigorous international quality standards, ensuring optimal performance and engine protection.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "We build lasting partnerships by understanding and exceeding the unique needs of automotive professionals.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuously advancing our formulations to meet evolving automotive technology and environmental standards.",
  },
];

const commitments = [
  "ISO 9001 certified quality management",
  "API and ACEA approved products",
  "Environmentally responsible formulations",
  "Technical support and training programs",
  "Reliable supply chain and delivery",
  "Competitive pricing for professionals",
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              25 Years of Automotive{" "}
              <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Soma Lubrifiants has been a trusted name in automotive lubrication since 1998. 
              Our commitment to quality and innovation has made us a preferred partner for 
              workshops, garages, and fleet operators across the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company History */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1998, Soma Lubrifiants began as a small distribution company 
                  with a vision to provide premium automotive lubricants to professional 
                  workshops in our region.
                </p>
                <p>
                  Over the past 25 years, we have grown into a leading supplier of 
                  comprehensive lubrication solutions, serving hundreds of garages, 
                  fleet operators, and distributors.
                </p>
                <p>
                  Our growth is built on a foundation of quality products, technical 
                  expertise, and unwavering commitment to our partners' success. Today, 
                  we offer over 150 product ranges covering all automotive lubrication needs.
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
              <img
                src={workshopImage}
                alt="Automotive workshop"
                className="rounded-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-xl">
                <div className="font-heading text-3xl font-bold">Since</div>
                <div className="text-lg">1998</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Vision & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We strive to be the most trusted partner in automotive lubrication, 
              delivering excellence in every product and service.
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
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-8 h-8 text-primary" />
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                  Our Commitment
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                At Soma Lubrifiants, quality is not just a standard—it's our promise. 
                We are committed to delivering products and services that exceed 
                industry expectations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {commitments.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
                  <div className="font-heading text-4xl font-bold mb-2">ISO</div>
                  <div className="text-sm">9001 Certified</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">API</div>
                  <div className="text-sm text-muted-foreground">Approved</div>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">ACEA</div>
                  <div className="text-sm text-muted-foreground">Compliant</div>
                </div>
                <div className="p-6 rounded-2xl bg-secondary">
                  <div className="font-heading text-4xl font-bold text-foreground mb-2">OEM</div>
                  <div className="text-sm text-muted-foreground">Specifications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
