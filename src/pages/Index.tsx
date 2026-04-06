import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedProducts from "@/components/FeaturedProducts";
import GiftsSection from "@/components/GiftsSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
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
      
      {/* WhatsApp floating button */}
 import { FaWhatsapp } from "react-icons/fa";

<a
  href="https://wa.me/254712345678?text=Hi%20I%20want%20to%20order%20flowers"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  <FaWhatsapp className="w-6 h-6" />
  <span className="text-sm font-medium whitespace-nowrap">
    Chat with us
  </span>
</a>
    </div>
  );
};

export default Index;
