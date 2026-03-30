import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Star, Flower2, PartyPopper, HeartHandshake, ShoppingBag, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const occasions = [
  { name: "Birthdays", description: "Brighten their day with vibrant, joyful arrangements", icon: Gift, color: "text-primary", tags: ["Birthday Special"] },
  { name: "Anniversaries", description: "Celebrate enduring love with timeless romantic blooms", icon: Heart, color: "text-primary", tags: ["Anniversary"] },
  { name: "Romantic Gestures", description: "Express your love with passionate, heartfelt bouquets", icon: HeartHandshake, color: "text-accent", tags: ["Romance"] },
  { name: "Celebrations", description: "Congratulations, promotions, or just because — flowers say it all", icon: PartyPopper, color: "text-primary", tags: ["Celebrations"] },
  { name: "Thank You", description: "Show gratitude with a beautifully crafted arrangement", icon: HeartHandshake, color: "text-accent", tags: ["Dried"] },
];

const Occasions = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const selectedOccasion = occasions.find((o) => o.name === selected);

  const occasionProducts = selectedOccasion
    ? products.filter((p) => selectedOccasion.tags.includes(p.tag))
    : [];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">Find the Perfect Flowers</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Shop by Occasion</h1>
            <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">
              Every moment deserves the perfect bouquet. Browse our curated selections for life's most meaningful occasions.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {occasions.map((occasion) => (
                <Card
                  key={occasion.name}
                  onClick={() => setSelected(selected === occasion.name ? null : occasion.name)}
                  className={`group border cursor-pointer bg-card transition-colors duration-500 ${
                    selected === occasion.name ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
                  }`}
                >
                  <CardContent className="p-10 text-center space-y-5">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary">
                      <occasion.icon className={`h-7 w-7 ${occasion.color}`} />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{occasion.name}</h3>
                    <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">{occasion.description}</p>
                    <Button
                      variant={selected === occasion.name ? "default" : "outline"}
                      size="sm"
                      className="rounded-none tracking-wider uppercase text-[10px] font-body px-6 mt-2"
                    >
                      {selected === occasion.name ? "Selected" : `Browse ${occasion.name}`}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {selected && (
          <section className="py-20 bg-secondary/30 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center justify-between mb-12">
                <h2 className="font-display text-3xl text-foreground">{selected} Picks</h2>
                <button onClick={() => setSelected(null)} className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  <ChevronLeft className="h-4 w-4" /> All Occasions
                </button>
              </div>
              {occasionProducts.length === 0 ? (
                <p className="text-center text-muted-foreground font-body py-12">No products found for this occasion yet.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {occasionProducts.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                      <Card className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer">
                        <div className="relative overflow-hidden aspect-[3/4]">
                          <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                          <div className="absolute top-4 left-4">
                            <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-body tracking-[0.2em] uppercase px-3 py-1.5">{item.tag}</span>
                          </div>
                          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                            <Button size="sm" className="rounded-none tracking-wider uppercase text-[10px] font-body px-6">
                              <ShoppingBag className="mr-2 h-3.5 w-3.5" /> View Details
                            </Button>
                          </div>
                        </div>
                        <CardContent className="px-0 pt-5 pb-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                            <span className="font-body text-sm text-muted-foreground tracking-wide">{item.price}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Occasions;
