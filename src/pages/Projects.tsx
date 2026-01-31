import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Building2, Truck, Wrench, Users, MapPin, Calendar } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const projects = [
  {
    icon: Truck,
    title: "National Fleet Partnership",
    description: "Complete lubrication management for a logistics company with 250+ vehicles. Providing scheduled deliveries, product recommendations, and cost optimization.",
    status: "Ongoing",
    location: "Nationwide",
    year: "2023-Present",
    metrics: ["250+ Vehicles", "12 Depots", "30% Cost Reduction"],
  },
  {
    icon: Building2,
    title: "Workshop Network Program",
    description: "Exclusive supplier agreement with a network of 75 independent automotive workshops, providing premium products and technical training.",
    status: "Active",
    location: "Regional",
    year: "2022-Present",
    metrics: ["75 Workshops", "150+ Technicians Trained", "Premium Partner"],
  },
  {
    icon: Wrench,
    title: "OEM Service Center Supply",
    description: "Official lubricant supplier for authorized service centers, meeting strict OEM specifications and quality requirements.",
    status: "Active",
    location: "Multi-City",
    year: "2021-Present",
    metrics: ["15 Service Centers", "OEM Certified", "Premium Grade"],
  },
  {
    icon: Users,
    title: "Taxi Fleet Program",
    description: "Customized lubrication program for urban taxi fleets, optimizing maintenance schedules and reducing vehicle downtime.",
    status: "Ongoing",
    location: "Metropolitan",
    year: "2024",
    metrics: ["180 Taxis", "Extended Intervals", "24/7 Support"],
  },
];

const partnerships = [
  {
    type: "Garages",
    count: "200+",
    description: "Independent workshops and repair shops",
  },
  {
    type: "Fleets",
    count: "50+",
    description: "Commercial and logistics operators",
  },
  {
    type: "Distributors",
    count: "25+",
    description: "Regional distribution partners",
  },
  {
    type: "OEM Centers",
    count: "15+",
    description: "Authorized service centers",
  },
];

const Projects = () => {
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
              Projects & Partnerships
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Success{" "}
              <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover how we partner with automotive professionals to deliver 
              tailored lubrication solutions that drive business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  {partner.count}
                </div>
                <div className="font-semibold text-foreground mb-1">{partner.type}</div>
                <div className="text-sm text-muted-foreground">{partner.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real partnerships delivering real results for automotive businesses.
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
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{project.description}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, mIndex) => (
                    <span
                      key={mIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-lg"
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

      {/* Image Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={workshopImage}
              alt="Professional automotive workshop"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent flex items-center">
              <div className="p-8 md:p-12 max-w-lg">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Partner With Us
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join our growing network of successful automotive businesses. 
                  Let's discuss how we can support your lubrication needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Partnership
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
