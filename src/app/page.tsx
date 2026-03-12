import Hero from "@/components/sections/Hero";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import FeatureShowcase from "@/components/sections/FeatureShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />

      <FeaturesGrid />

      <FeatureShowcase />

      <HowItWorks />

      {/* <Testimonials /> */}

      <Pricing />

      <FAQ />

      <Footer />
    </>
  );
}
