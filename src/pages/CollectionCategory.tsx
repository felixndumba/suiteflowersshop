import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronLeft } from "lucide-react";
import { products } from "@/data/products";

const collectionMap: Record<string, { name: string; description: string; productIds: string[] }> = {
  "wedding-bridal": {
    name: "Wedding & Bridal",
    description: "Elegant arrangements for your most special day",
    productIds: ["bridal-bliss", "crimson-romance", "peaceful-grace"],
  },
  "Events-Subscriptons": {
    name: "Events & Subscriptions",
    description: "Tailored floral solutions for events, bulk supply, and flexible subscription packages.",
    productIds: ["spring-awakening", "tropical-paradise", "desert-bloom"],
  },
};

const CollectionCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const collection = collectionMap[slug || ""];

  if (!collection) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="font-display text-3xl text-foreground">Collection not found</h1>
            <Link to="/collections">
              <Button variant="outline" className="rounded-none tracking-wider uppercase text-xs font-body">Browse Collections</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const items = products.filter((p) => collection.productIds.includes(p.id));

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <Link to="/collections" className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to Collections
          </Link>
        </div>

        <section className="py-12 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">Collection</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">{collection.name}</h1>
            <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">{collection.description}</p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <Card className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer">
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <img src={product.image} alt={product.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-body tracking-[0.2em] uppercase px-3 py-1.5">{product.tag}</span>
                      </div>
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
      </main>
      <Footer />
    </div>
  );
};

export default CollectionCategory;
