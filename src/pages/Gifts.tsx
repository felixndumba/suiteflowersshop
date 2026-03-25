import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Search, SlidersHorizontal, X } from "lucide-react";
import { gifts, giftCategories } from "@/data/gifts";

const priceRanges = [
  { label: "Under $70", min: 0, max: 69 },
  { label: "$70 – $100", min: 70, max: 100 },
  { label: "Over $100", min: 101, max: Infinity },
];

const Gifts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let items = gifts;
    if (activeCategory) items = items.filter((g) => g.category === activeCategory);
    if (search) {
      const q = search.toLowerCase();
      items = items.filter((g) => g.name.toLowerCase().includes(q) || g.description.toLowerCase().includes(q));
    }
    if (priceFilter !== null) {
      const range = priceRanges[priceFilter];
      items = items.filter((g) => g.priceNum >= range.min && g.priceNum <= range.max);
    }
    return items;
  }, [activeCategory, search, priceFilter]);

  const clearFilters = () => {
    setSearch("");
    setPriceFilter(null);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center space-y-4">
            <p className="text-sm font-body tracking-[0.3em] uppercase text-primary">Shop</p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground">Gift Collection</h1>
            <p className="text-muted-foreground font-body font-light max-w-lg mx-auto">
              Find the perfect gift for every occasion, curated with care.
            </p>
          </div>
        </section>

        <section className="py-12 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search gifts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 rounded-none font-body h-11"
                />
              </div>
              <Button
                variant="outline"
                className="rounded-none font-body tracking-wider uppercase text-xs h-11 gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
              {(activeCategory || priceFilter !== null || search) && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs font-body gap-1">
                  <X className="h-3 w-3" /> Clear
                </Button>
              )}
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border space-y-6">
                <div>
                  <p className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {giftCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSearchParams(activeCategory === cat.id ? {} : { category: cat.id })}
                        className={`px-4 py-2 text-xs font-body tracking-wider uppercase border transition-colors ${
                          activeCategory === cat.id
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-primary"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-3">Price Range</p>
                  <div className="flex flex-wrap gap-2">
                    {priceRanges.map((range, i) => (
                      <button
                        key={range.label}
                        onClick={() => setPriceFilter(priceFilter === i ? null : i)}
                        className={`px-4 py-2 text-xs font-body tracking-wider border transition-colors ${
                          priceFilter === i
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-muted-foreground hover:border-primary"
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-body text-muted-foreground mb-8">
              {filtered.length} {filtered.length === 1 ? "gift" : "gifts"} found
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <p className="font-display text-2xl text-foreground">No gifts found</p>
                <p className="text-muted-foreground font-body">Try adjusting your filters or search.</p>
                <Button variant="outline" className="rounded-none font-body" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((gift) => (
                  <Link key={gift.id} to={`/gift/${gift.id}`}>
                    <Card className="group border-0 shadow-none bg-transparent overflow-hidden cursor-pointer">
                      <div className="relative overflow-hidden aspect-[3/4]">
                        <img src={gift.image} alt={gift.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-background/90 backdrop-blur-sm text-foreground text-[10px] font-body tracking-[0.2em] uppercase px-3 py-1.5">
                            {gift.category.replace("-", " ")}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100">
                          <Button size="sm" className="rounded-none tracking-wider uppercase text-[10px] font-body px-6">
                            <ShoppingBag className="mr-2 h-3.5 w-3.5" /> View Details
                          </Button>
                        </div>
                      </div>
                      <CardContent className="px-0 pt-5 pb-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-lg text-foreground">{gift.name}</h3>
                          <span className="font-body text-sm text-muted-foreground tracking-wide">{gift.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gifts;
