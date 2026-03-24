import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import productBridal from "@/assets/product-bridal.jpg";
import productSpring from "@/assets/product-spring.jpg";
import productRomance from "@/assets/product-romance.jpg";
import productDried from "@/assets/product-dried.jpg";
import productSympathy from "@/assets/product-sympathy.jpg";
import productTropical from "@/assets/product-tropical.jpg";

const products = [
  { name: "Bridal Bliss", price: "$120", image: productBridal, tag: "Wedding" },
  { name: "Spring Awakening", price: "$65", image: productSpring, tag: "Seasonal" },
  { name: "Crimson Romance", price: "$89", image: productRomance, tag: "Best Seller" },
  { name: "Desert Bloom", price: "$75", image: productDried, tag: "Dried" },
  { name: "Peaceful Grace", price: "$95", image: productSympathy, tag: "Sympathy" },
  { name: "Tropical Paradise", price: "$85", image: productTropical, tag: "Exotic" },
];

const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">
            Curated for You
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Our Collections
          </h2>
          <p className="text-muted-foreground font-body font-light max-w-md mx-auto">
            Each arrangement is thoughtfully designed by our master florists using the freshest seasonal blooms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-body tracking-[0.2em] uppercase px-3 py-1.5">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                  <Button size="sm" className="rounded-none tracking-wider uppercase text-[10px] font-body px-6">
                    <ShoppingBag className="mr-2 h-3.5 w-3.5" /> Add to Cart
                  </Button>
                </div>
              </div>
              <CardContent className="px-0 pt-5 pb-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-foreground">{product.name}</h3>
                  <span className="font-body text-sm text-muted-foreground tracking-wide">
                    {product.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-none px-10 tracking-wider uppercase text-xs font-body h-12"
          >
            View All Arrangements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
