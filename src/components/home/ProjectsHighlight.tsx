import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Building2, Truck, Wrench } from "lucide-react";
import workshopImage from "@/assets/workshop.jpg";

const projects = [
  {
    icon: Building2,
    title: "Fleet Management Partnership",
    description: "Supplying complete lubrication solutions for a national logistics fleet of 200+ vehicles.",
    tag: "Ongoing",
  },
  {
    icon: Wrench,
    title: "Workshop Network",
    description: "Technical support and product supply for 50+ certified automotive workshops.",
    tag: "Active",
  },
  {
    icon: Truck,
    title: "Distribution Expansion",
    description: "Expanding our distribution network across new regions with strategic partnerships.",
    tag: "2024",
  },
];

const ProjectsHighlight = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card overflow-hidden" ref={ref}>
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={workshopImage}
                alt="Automotive workshop"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-xl">
              <div className="font-heading text-2xl font-bold">50+</div>
              <div className="text-sm">Active Projects</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded-full mb-4">
              Projects & Partnerships
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Driving Success Together
            </h2>
            <p className="text-muted-foreground mb-8">
              We partner with garages, fleet operators, and distributors to deliver 
              tailored lubrication solutions that drive business success.
            </p>

            {/* Project Cards */}
            <div className="space-y-4 mb-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{project.title}</h4>
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                        {project.tag}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHighlight;
