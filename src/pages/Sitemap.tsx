import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/data/products";
import { gifts } from "@/data/gifts";
import { Button } from "@/components/ui/button";

const staticPages = [
  { path: "/", title: "Home", lastmod: "2024-01-01" },
  { path: "/collections", title: "Collections", lastmod: "2024-01-01" },
  { path: "/gifts", title: "Gifts", lastmod: "2024-01-01" },
  { path: "/occasions", title: "Occasions", lastmod: "2024-01-01" },
  { path: "/delivery", title: "Delivery Info", lastmod: "2024-01-01" },
  { path: "/contact", title: "Contact", lastmod: "2024-01-01" },
  { path: "/cart", title: "Cart", lastmod: "2024-01-01" },
];

const Sitemap = () => {
  const baseUrl = "https://www.suiteflowersandgifts.co.ke";

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-6">
            Sitemap
          </h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover all pages, products, and gifts on Suite Flowers & Gifts
          </p>
        </div>

        {/* Static Pages */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-display">Static Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {staticPages.map((page) => (
                <Button key={page.path} variant="ghost" className="justify-start h-auto p-4 text-left hover:bg-secondary">
                  <Link to={page.path} className="font-mono text-sm">
                    {baseUrl}{page.path} ↗
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Products */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-display">Products ({products.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {products.slice(0, 50).map((product) => (
                <Button key={product.id} variant="ghost" className="justify-start h-auto p-3 text-left hover:bg-secondary text-sm">
                  <Link to={`/product/${product.id}`} className="font-mono truncate">
                    {baseUrl}/product/{product.id} ↗
                  </Link>
                </Button>
              ))}
              {products.length > 50 && (
                <p className="text-sm text-muted-foreground mt-2">... and {products.length - 50} more</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Gifts */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-display">Gifts ({gifts.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {gifts.slice(0, 50).map((gift) => (
                <Button key={gift.id} variant="ghost" className="justify-start h-auto p-3 text-left hover:bg-secondary text-sm">
                  <Link to={`/gift/${gift.id}`} className="font-mono truncate">
                    {baseUrl}/gift/{gift.id} ↗
                  </Link>
                </Button>
              ))}
              {gifts.length > 50 && (
                <p className="text-sm text-muted-foreground mt-2">... and {gifts.length - 50} more</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sitemap;

