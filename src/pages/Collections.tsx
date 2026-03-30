import { useState, useMemo, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext } from "@/components/ui/pagination";

import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X, ShoppingBag, ArrowRight } from "lucide-react";

import { products } from "@/data/products";
import productBridal from "@/assets/product-bridal.jpg";
import productSpring from "@/assets/product-spring.jpg";

const collections = [
  {
    slug: "wedding-bridal",
    name: "Wedding & Bridal",
    description: "Elegant arrangements for your most special day",
    image: productBridal,
  },
  {
    slug:"Events-Subscriptons",
    name: "Events & Subscriptions",
    description: "Tailored floral solutions for events, bulk supply, and flexible subscription packages.",
    image: productSpring,
  },
];

const tags = [...new Set(products.map((p) => p.tag))];

const priceRanges = [
  { label: "Under KES 1000", min: 0, max: 999 },
  { label: "KES 1000 – KES 5000", min: 1000, max: 4999 },
  { label: "Over KES 5000", min: 5000, max: Infinity },
];

const Collections = () => {
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [priceFilter, setPriceFilter] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const filtered = useMemo(() => {
    let items = products;
    if (search) {
      const q = search.toLowerCase();
      items = items.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    if (tagFilter) items = items.filter((p) => p.tag === tagFilter);
    if (priceFilter !== null) {
      const range = priceRanges[priceFilter];
      items = items.filter((p) => p.priceNum >= range.min && p.priceNum <= range.max);
    }
    return items;
  }, [search, tagFilter, priceFilter]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const currentItems = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const hasFilters = search || tagFilter || priceFilter !== null;

  useEffect(() => {
    setCurrentPage(1);
  }, [filtered.length]);

  const clearFilters = () => {
    setSearch("");
    setTagFilter(null);
    setPriceFilter(null);
  };

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

        {/* Collection Cards */}
        <section className="py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collections.map((collection) => (
                <Link key={collection.slug} to={`/collections/${collection.slug}`}>
                  <div className="group relative overflow-hidden aspect-[4/5] cursor-pointer">
                    <img src={collection.image} alt={collection.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

        {/* All Products with Filters */}
        <section className="py-12 bg-secondary/30 border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl text-foreground mb-8">All Products</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10 rounded-none font-body h-11" />
              </div>
              <Button variant="outline" className="rounded-none font-body tracking-wider uppercase text-xs h-11 gap-2" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </Button>
              {hasFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs font-body gap-1">
                  <X className="h-3 w-3" /> Clear
                </Button>
              )}
            </div>

            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border space-y-6">
                <div>
                  <p className="text-xs font-body tracking-[0.2em] uppercase text-foreground mb-3">Category</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
                        className={`px-4 py-2 text-xs font-body tracking-wider uppercase border transition-colors ${
                          tagFilter === tag ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"
                        }`}
                      >
                        {tag}
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
                          priceFilter === i ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary"
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

        <section className="py-16 lg:py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-body text-muted-foreground mb-8">
              {filtered.length} {filtered.length === 1 ? "product" : "products"} found • Page {currentPage} of {totalPages}
            </p>
{filtered.length === 0 ? (
  <div className="text-center py-20 space-y-4">
    <p className="font-display text-2xl text-foreground">No products found</p>
    <p className="text-muted-foreground font-body">Try adjusting your filters or search.</p>
    <Button variant="outline" className="rounded-none font-body" onClick={clearFilters}>Clear Filters</Button>
  </div>
) : (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {currentItems.map((product) => (
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

    {totalPages > 1 && (
      <div className="flex justify-center mt-12">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(1, prev - 1));
                }} 
                className="rounded-none font-body tracking-wider uppercase text-xs"
              />
            </PaginationItem>
            <PaginationItem>
              <span className="flex h-9 w-9 items-center justify-center text-sm font-medium">
                {currentPage}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                }} 
                className="rounded-none font-body tracking-wider uppercase text-xs"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    )}
  </>
)}
          </div>
        </section>



      </main>
      <Footer />
    </div>
  );
};

export default Collections;
