import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import GiftsSection from "@/components/GiftsSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FeaturedProducts />
      <GiftsSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
