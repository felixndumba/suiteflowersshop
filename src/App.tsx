import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Index from "./pages/Index.tsx";
import Collections from "./pages/Collections.tsx";
import CollectionCategory from "./pages/CollectionCategory.tsx";
import Occasions from "./pages/Occasions.tsx";
import Contact from "./pages/Contact.tsx";
import Cart from "./pages/Cart.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Gifts from "./pages/Gifts.tsx";
import GiftDetail from "./pages/GiftDetail.tsx";
import Delivery from "./pages/delivery.tsx";
import NotFound from "./pages/NotFound.tsx";
import Sitemap from "./pages/Sitemap.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:slug" element={<CollectionCategory />} />
            <Route path="/occasions" element={<Occasions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/gift/:id" element={<GiftDetail />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
