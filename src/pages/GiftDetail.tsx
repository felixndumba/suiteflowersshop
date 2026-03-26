import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ShoppingBag, MessageCircle, Check, ChevronLeft } from "lucide-react";
import { useState } from "react";
import { getGift, getGiftsByCategory, gifts } from "@/data/gifts";
import { useCart } from "@/context/CartContext";

const GiftDetail = () => {
  const { id } = useParams<{ id: string }>();
  const gift = getGift(id || "");
  const [selectedSize, setSelectedSize] = useState(0);
  const { addToCart } = useCart();

  if (!gift) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="font-display text-3xl text-foreground">Gift not found</h1>
            <Link to="/gifts">
              <Button variant="outline" className="rounded-none tracking-wider uppercase text-xs font-body">Browse Gifts</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const related = getGiftsByCategory(gift.category).filter((g) => g.id !== gift.id).slice(0, 3);
  if (related.length < 3) {
    const extra = gifts.filter((g) => g.id !== gift.id && !related.find((r) => r.id === g.id)).slice(0, 3 - related.length);
    related.push(...extra);
  }

  const currentPrice = gift.sizes[selectedSize].price;
  const currentPriceNum = parseInt(currentPrice.replace("$", ""));

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to order the "${gift.name}" (${gift.sizes[selectedSize].label} – ${currentPrice}). Please let me know the next steps!`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  const handleAddToCart = () => {
    addToCart({
      id: gift.id,
      name: gift.name,
      price: currentPriceNum,
      priceLabel: currentPrice,
      size: gift.sizes[selectedSize].label,
      image: gift.image,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link to="/gifts" className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to Gifts
          </Link>
        </div>

        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <div className="aspect-[3/4] overflow-hidden bg-secondary">
                <img src={gift.image} alt={gift.name} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={`aspect-square overflow-hidden cursor-pointer border-2 ${i === 0 ? "border-primary" : "border-transparent"} hover:border-primary transition-colors`}>
                    <img src={gift.image} alt={`${gift.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-body tracking-[0.3em] uppercase text-primary">{gift.category.replace("-", " ")}</span>
                <h1 className="font-display text-4xl md:text-5xl text-foreground">{gift.name}</h1>
                <p className="font-display text-2xl text-foreground">{currentPrice}</p>
              </div>
              <p className="text-muted-foreground font-body font-light leading-relaxed">{gift.description}</p>
              <ul className="space-y-2">
                {gift.details.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" /> {d}
                  </li>
                ))}
              </ul>
              <div className="space-y-3">
                <p className="text-sm font-body tracking-[0.2em] uppercase text-foreground">Select Size</p>
                <RadioGroup value={String(selectedSize)} onValueChange={(v) => setSelectedSize(Number(v))} className="flex flex-wrap gap-3">
                  {gift.sizes.map((size, i) => (
                    <div key={size.label}>
                      <RadioGroupItem value={String(i)} id={`gift-size-${i}`} className="sr-only peer" />
                      <Label htmlFor={`gift-size-${i}`} className="flex flex-col items-center gap-1 border border-border px-6 py-3 cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 transition-colors hover:border-primary/50">
                        <span className="text-sm font-body font-medium text-foreground">{size.label}</span>
                        <span className="text-xs font-body text-muted-foreground">{size.price}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button onClick={handleAddToCart} className="flex-1 rounded-none h-12 tracking-wider uppercase text-xs font-body">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full rounded-none h-12 tracking-wider uppercase text-xs font-body border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800">
                    <MessageCircle className="mr-2 h-4 w-4" /> Order via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="font-display text-3xl text-foreground mb-12">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {related.map((item) => (
                  <Link key={item.id} to={`/gift/${item.id}`}>
                    <Card className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <CardContent className="px-0 pt-5 pb-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-lg text-foreground">{item.name}</h3>
                          <span className="font-body text-sm text-muted-foreground">{item.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default GiftDetail;
