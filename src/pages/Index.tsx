import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import KeyFigures from "@/components/home/KeyFigures";
import ServiceCategories from "@/components/home/ServiceCategories";
import ProjectsHighlight from "@/components/home/ProjectsHighlight";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <KeyFigures />
      <ServiceCategories />
      <ProjectsHighlight />
      <CTASection />
    </Layout>
  );
};

export default Index;
