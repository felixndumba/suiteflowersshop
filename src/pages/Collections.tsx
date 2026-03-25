import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productBridal from "@/assets/product-bridal.jpg";
import productSpring from "@/assets/product-spring.jpg";

const collections = [
  {
    slug: "wedding-bridal",
    name: "Wedding & Bridal",
    description: "Elegant arrangements for your most special day",
    image: productBridal,
    count: 3,
  },
  {
    slug: "seasonal-favorites",
    name: "Seasonal Favorites",
    description: "Fresh picks that celebrate each season's beauty",
    image: productSpring,
    count: 3,
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">Browse</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Our Collections</h1>
            <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">
              Discover curated collections crafted with passion, from bridal elegance to seasonal wonders.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link key={collection.slug} to={`/collections/${collection.slug}`}>
                  <div className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 space-y-4">
                      <h2 className="font-display text-3xl md:text-4xl text-background">{collection.name}</h2>
                      <p className="font-body text-sm text-background/80 max-w-xs">{collection.description}</p>
                      <div className="flex items-center gap-2 text-background font-body text-xs tracking-[0.2em] uppercase group-hover:gap-3 transition-all">
                        Explore Collection <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
