import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const collections = [
  {
    name: "Wedding & Bridal",
    description: "Elegant arrangements for your most special day",
    items: products.filter((p) => ["bridal-bliss", "crimson-romance", "peaceful-grace"].includes(p.id)),
  },
  {
    name: "Seasonal Favorites",
    description: "Fresh picks that celebrate each season's beauty",
    items: products.filter((p) => ["spring-awakening", "tropical-paradise", "desert-bloom"].includes(p.id)),
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

        {collections.map((collection) => (
          <section key={collection.name} className="py-20 lg:py-24 bg-background even:bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-12 space-y-2">
                <h2 className="font-display text-3xl md:text-4xl text-foreground">{collection.name}</h2>
                <p className="text-muted-foreground font-body font-light">{collection.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {collection.items.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    <Card className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                          <Button size="sm" className="rounded-none tracking-wider uppercase text-[10px] font-body px-6">
                            <ShoppingBag className="mr-2 h-3.5 w-3.5" /> View Details
                          </Button>
                        </div>
                      </div>
                      <CardContent className="px-0 pt-5 pb-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-lg text-foreground">{product.name}</h3>
                          <span className="font-body text-sm text-muted-foreground tracking-wide">{product.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
