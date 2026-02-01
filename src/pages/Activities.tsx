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
    title: "Automotive Lubricants",
    description: "Comprehensive range of lubricants designed for modern vehicles, including synthetic, semi-synthetic, and mineral oils meeting the latest industry specifications.",
    image: productEngineOil,
    features: ["Full synthetic formulations", "Extended drain intervals", "Maximum engine protection"],
  },
  {
    icon: Cog,
    title: "Transmission Oils",
    description: "Specialized fluids for manual and automatic transmissions, differentials, and power steering systems ensuring smooth operation and extended component life.",
    image: productTransmissionOil,
    features: ["ATF fluids", "Manual gear oils", "CVT compatible"],
  },
  {
    icon: Beaker,
    title: "Coolants & Additives",
    description: "Advanced coolant solutions and performance additives to maintain optimal engine temperature, protect against corrosion, and enhance overall system efficiency.",
    image: productCoolants,
    features: ["Long-life coolants", "Fuel system cleaners", "Engine treatments"],
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description: "Expert consulting services to help you select the right products for your specific applications, plus training programs for your technical staff.",
    image: workshopImage,
    features: ["Product recommendations", "Technical training", "On-site support"],
  },
];

const Activities = () => {
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
              Our Activities
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Lubrication{" "}
              <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From engine oils to technical consulting, we provide end-to-end lubrication 
              solutions tailored for automotive professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Activities List */}
      <section className="section-padding">
        <div className="container-wide space-y-24">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                {/* Icon Badge */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center shadow-xl">
                  <activity.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {activity.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {activity.description}
                </p>
                <div className="space-y-3">
                  {activity.features.map((feature, fIndex) => (
                    <div
                      key={fIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-medium">{feature}</span>
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
