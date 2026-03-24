import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Star, Flower2, PartyPopper, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const occasions = [
  { name: "Birthdays", description: "Brighten their day with vibrant, joyful arrangements", icon: Gift, color: "text-primary" },
  { name: "Anniversaries", description: "Celebrate enduring love with timeless romantic blooms", icon: Heart, color: "text-primary" },
  { name: "Weddings", description: "From bouquets to centerpieces — make every moment magical", icon: Star, color: "text-gold" },
  { name: "Sympathy", description: "Express your heartfelt condolences with graceful florals", icon: Flower2, color: "text-sage" },
  { name: "Celebrations", description: "Congratulations, promotions, or just because — flowers say it all", icon: PartyPopper, color: "text-gold" },
  { name: "Thank You", description: "Show gratitude with a beautifully crafted arrangement", icon: HeartHandshake, color: "text-accent" },
];

const Occasions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">Find the Perfect Flowers</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Shop by Occasion</h1>
            <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">
              Every moment deserves the perfect bouquet. Browse our curated selections for life's most meaningful occasions.
            </p>
          </div>
        </section>

        {/* Occasions Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {occasions.map((occasion) => (
                <Card key={occasion.name} className="group border border-border hover:border-primary/30 transition-colors duration-500 cursor-pointer bg-card">
                  <CardContent className="p-10 text-center space-y-5">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary">
                      <occasion.icon className={`h-7 w-7 ${occasion.color}`} />
                    </div>
                    <h3 className="font-display text-2xl text-foreground">{occasion.name}</h3>
                    <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                      {occasion.description}
                    </p>
                    <Button variant="outline" size="sm" className="rounded-none tracking-wider uppercase text-[10px] font-body px-6 mt-2">
                      Browse {occasion.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Occasions;
