import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { gifts } from "@/data/gifts";

const links = [
  { label: "Shop", href: "/#shop" },
  { label: "Collections", href: "/collections" },
  { label: "Gifts", href: "/gifts" },
  { label: "Occasions", href: "/occasions" },
  { label: "Contact", href: "/contact" },
];

const allItems = [
  ...products.map((p) => ({ id: p.id, name: p.name, type: "product" as const })),
  ...gifts.map((g) => ({ id: g.id, name: g.name, type: "gift" as const })),
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allItems.filter((item) => item.name.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  const handleSelect = (item: (typeof allItems)[0]) => {
    setQuery("");
    setSearchOpen(false);
    navigate(item.type === "gift" ? `/gift/${item.id}` : `/product/${item.id}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display text-2xl tracking-wide text-foreground">
            Pétale
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.href.startsWith("/#") ? (
                <a key={link.label} href={link.href} className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.href} className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center">0</span>
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Search Dropdown */}
      {searchOpen && (
        <div className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products and gifts..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-10 rounded-none font-body h-11"
                autoFocus
              />
            </div>
            {results.length > 0 && (
              <div className="mt-2 border border-border divide-y divide-border">
                {results.map((item) => (
                  <button
                    key={`${item.type}-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-secondary transition-colors"
                  >
                    <span className="font-body text-sm text-foreground">{item.name}</span>
                    <span className="text-[10px] font-body tracking-[0.2em] uppercase text-muted-foreground">{item.type}</span>
                  </button>
                ))}
              </div>
            )}
            {query.trim() && results.length === 0 && (
              <p className="mt-3 text-sm font-body text-muted-foreground">No results found for "{query}"</p>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {links.map((link) =>
              link.href.startsWith("/#") ? (
                <a key={link.label} href={link.href} className="block text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.href} className="block text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
